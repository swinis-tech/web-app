import { Component } from '@angular/core';
import { PrayerTimesService } from '../../../../prayer-times/prayer-times.service';
import { FirestoreService } from 'src/app/firestore/firestore.service';

type OutputPrayerNames =
  | 'fajr'
  | 'sunrise'
  | 'dhuhr'
  | 'asr'
  | 'maghrib'
  | 'isha';

type OutputPrayer = {
  name: OutputPrayerNames;
  athan: string;
  iqamah: string;
};

export type HardcodedIqamahTimes = Partial<Record<OutputPrayerNames, string>>;

/** Number of minutes from athan to iqamah */
export type IqamahOffset = {
  [name in OutputPrayerNames]?: number;
};

@Component({
  selector: 'app-prayer-schedule',
  templateUrl: './prayer-schedule.component.html',
  styleUrls: ['./prayer-schedule.component.css'],
})
export class PrayerScheduleComponent {
  private static AM_SUFFIX = 'am' as const;
  private static PM_SUFFIX = 'pm' as const;
  private static outputPrayerNames = [
    'fajr',
    'sunrise',
    'dhuhr',
    'asr',
    'maghrib',
    'isha',
  ] as const;

  public outputTimes!: OutputPrayer[];
  public today: Date = new Date();

  private readonly prayTimes;
  private offset!: IqamahOffset;
  private hardcodedTimes!: HardcodedIqamahTimes;

  constructor(
    prayerTimesService: PrayerTimesService,
    firestoreServce: FirestoreService
  ) {
    this.prayTimes = prayerTimesService.getTimes(
      this.today,
      [-37.8226, 145.0354],
      'auto',
      'auto',
      'Float'
    );

    firestoreServce
      .getIqamahOffsets()
      .then((offsets) => {
        this.offset = offsets;
        firestoreServce.getHardcodedTimes().then((hardcodedTimes) => {
          this.hardcodedTimes = hardcodedTimes;
          this.outputTimes = this.getIqamahTimes();
        });
      })
      .catch((a) => console.log(a));
  }

  getNextPrayer(): OutputPrayerNames {
    let currentDate = this.today;
    let currentTime = currentDate.getHours() + currentDate.getMinutes() / 60;
    let prevTime = 24;
    let nextPrayer: OutputPrayerNames = 'fajr';
    for (const prayer of this.outputTimes) {
      let time = this.timeToFloat(prayer.athan);
      if (time >= currentTime && time < prevTime) {
        prevTime = time;
        nextPrayer = prayer.name;
      }
    }
    return nextPrayer;
  }

  /**
   * @param time string in "hh:mm am/pm format, e.g. "09:34 pm"
   */
  timeToFloat(time: string) {
    let [noSuffixTime, suffix] = time.split(' ');
    let [hours, minutes] = noSuffixTime.split(':').map((x) => +x);
    hours %= 12;
    hours +=
      suffix.toLowerCase() === PrayerScheduleComponent.PM_SUFFIX ? 12 : 0;
    return hours + minutes / 60;
  }

  private getIqamahTimes(): OutputPrayer[] {
    return PrayerScheduleComponent.outputPrayerNames.map((prayer) => ({
      name: prayer,
      athan: this.to12HourFormat(this.prayTimes[prayer]),
      iqamah: this.getIqamahTime(prayer),
    }));
  }

  private getIqamahTime(timeName: OutputPrayerNames): string {
    let hardcodedTime = this.hardcodedTimes[timeName];
    if (hardcodedTime !== undefined) {
      return hardcodedTime;
    }

    let time = this.prayTimes[timeName];
    let offset = this.offset[timeName];
    if (offset !== undefined) {
      time += offset / 60;
    }
    return this.to12HourFormat(time);
  }

  private to12HourFormat(time: number): string {
    let minutes = Math.round((time % 1) * 60);
    let hours = (Math.floor(time) + Math.floor(minutes / 60)) % 24;
    minutes %= 60;
    let suffix =
      hours < 12
        ? PrayerScheduleComponent.AM_SUFFIX
        : PrayerScheduleComponent.PM_SUFFIX;
    hours = hours % 12 || 12;
    return this.to2Digits(hours) + ':' + this.to2Digits(minutes) + ' ' + suffix;
  }

  private to2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
