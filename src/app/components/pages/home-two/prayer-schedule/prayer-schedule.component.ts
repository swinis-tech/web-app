import {Component, OnDestroy} from '@angular/core';
import {
  PrayerNames,
  PrayerTimesService,
} from '../../../../prayer-times/prayer-times.service';
import { FirestoreService } from 'src/app/firestore/firestore.service';
import {NgClass, NgFor, NgIf, TitleCasePipe} from "@angular/common";

type OutputPrayerNames =
  | 'fajr'
  | 'sunrise'
  | 'dhuhr'
  | 'asr'
  | 'maghrib'
  | 'isha'
  | "jumu'ah 1"
  | "jumu'ah 2";

type OutputPrayer = {
  name: OutputPrayerNames;
  adhan: string;
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
  standalone: true,
  imports: [TitleCasePipe, NgClass, NgIf, NgFor],
  styleUrls: ['./prayer-schedule.component.css'],
})
export class PrayerScheduleComponent implements OnDestroy {
  private static AM_SUFFIX = 'am' as const;
  private static PM_SUFFIX = 'pm' as const;

  private static HAWTHORN_COORDINATES: [number, number] = [-37.8226, 145.0354]

  public outputTimes!: OutputPrayer[];
  public today: Date = new Date();

  private readonly prayTimes;
  private offset!: IqamahOffset;
  private hardcodedTimes!: HardcodedIqamahTimes;
  public countdown: string = ''
  private id: number = 0

  private tomorrowTimes

  constructor(
    prayerTimesService: PrayerTimesService,
    firestoreService: FirestoreService
  ) {
    this.prayTimes = prayerTimesService.getTimes(
      this.today,
      PrayerScheduleComponent.HAWTHORN_COORDINATES,
      'auto',
      'auto',
      'Float'
    );

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    this.tomorrowTimes = prayerTimesService.getTimes(
      tomorrow,
      PrayerScheduleComponent.HAWTHORN_COORDINATES,
      'auto',
      'auto',
      'Float'
    )

    firestoreService.getData().then((prayerData) => {
      this.offset = prayerData.iqamahOffset;
      this.hardcodedTimes = prayerData.hardcodedIqamah;
      this.outputTimes = this.getIqamahTimes().concat(prayerData.friday);

      this.countdown = this.getCountdown();
      this.id = setInterval(() => {
        this.countdown = this.getCountdown()
      }, 1000)
    });

  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id)
    }
  }


  getNextPrayer(): OutputPrayerNames {
    if (!this.outputTimes) {

    }

    let currentDate = new Date();
    let currentTime = currentDate.getHours() + currentDate.getMinutes() / 60;
    let prevTime = 24;
    let nextPrayer: OutputPrayerNames = 'fajr';
    let times = this.outputTimes;
    if (currentDate.getDay() !== 5) {
      times = times.slice(0, times.length - 2);
    }

    for (const prayer of times) {
      let time = this.timeToFloat(prayer.adhan);
      if (time > currentTime && time < prevTime) {
        prevTime = time;
        nextPrayer = prayer.name;
      }
    }
    return nextPrayer;
  }

  /**
   * @param time string in "hh:mm am/pm format, e.g. "09:34 pm"
   */
  timeToFloat(time: string): number {
    let [noSuffixTime, suffix] = time.split(' ');
    let [hours, minutes] = noSuffixTime.split(':').map((x) => +x);
    hours %= 12;
    hours +=
      suffix.toLowerCase() === PrayerScheduleComponent.PM_SUFFIX ? 12 : 0;
    return hours + minutes / 60;
  }

  private getIqamahTimes(): OutputPrayer[] {
    const prayerNames: (PrayerNames & OutputPrayerNames)[] = [
      'fajr',
      'sunrise',
      'dhuhr',
      'asr',
      'maghrib',
      'isha',
    ];

    return prayerNames.map((prayer) => ({
      name: prayer,
      adhan: this.to12HourFormat(this.prayTimes[prayer]),
      iqamah: this.getIqamahTime(prayer),
    }));
  }

  private getIqamahTime(timeName: PrayerNames & OutputPrayerNames): string {
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
    const minutes = Math.round((time % 1) * 60);
    let hours = (Math.floor(time) + Math.floor(minutes / 60)) % 24;
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

  private getFloatCountdown(): number {
    const next = this.getNextPrayer();
    const nextPrayer = this.outputTimes.find(prayer => prayer.name === next)!;
    let nextPrayerTime = this.timeToFloat(nextPrayer.adhan)
    let date = new Date();
    let currentTime = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600
    if (currentTime > nextPrayerTime) {
      nextPrayerTime = this.tomorrowTimes.fajr + 24
    }
    return nextPrayerTime - currentTime
  }

  public getCountdown(): string {
    const countdown = this.getFloatCountdown()
    let minutes = (countdown % 1) * 60
    let seconds = Math.round((minutes % 1) * 60)
    minutes = Math.floor(minutes)
    let hours = Math.floor(countdown)
    const time = [hours, minutes, seconds]
    const suffixes = ['h', 'min', 's']
    const timeStrings = time.map((x, i) => {
      if (x > 0) {
        return x + suffixes[i]
      }
      return ''
    })
    return timeStrings.join(' ')
  }
}
