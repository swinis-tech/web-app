import {Component, OnInit} from '@angular/core';
import {
  PrayerTimesService
} from '../../../../prayer-times/prayer-times.service';


type OutputPrayerTimesNames = 'fajr' | 'sunrise' | 'dhuhr' | 'asr' | 'maghrib' | 'isha'

type OutputPrayer = {
  name: OutputPrayerTimesNames,
  athan: string,
  iqamah: string
}

type OutputPrayerTimes = OutputPrayer[]

type HardcodedIqamahTimes = {
    [name in OutputPrayerTimesNames]?: string;
}

/** Number of minutes from athan to iqamah */
type IqamahOffset = {
    [name in OutputPrayerTimesNames]?: number
}

@Component({
  selector: 'app-prayer-schedule',
  templateUrl: './prayer-schedule.component.html',
  styleUrls: ['./prayer-schedule.component.css'],
})
export class PrayerScheduleComponent implements OnInit {
  private outputPrayerNames: Set<OutputPrayerTimesNames> = new Set(['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'])

  private readonly prayTimes
  public outputTimes: OutputPrayerTimes
  public today: Date = new Date()

  private offset: IqamahOffset = {
    asr: 10,
    maghrib: 7,
    isha: 5
  }

  private hardcodedTimes: HardcodedIqamahTimes = {
    dhuhr: '01:45 pm',
    fajr: '05:20 am',
    sunrise: '--:--'
  }

  private AM_SUFFIX = 'am' as const
  private PM_SUFFIX = 'pm' as const


  constructor(prayerTimesService: PrayerTimesService) {
    this.prayTimes = prayerTimesService.getTimes(this.today, [-37.8226, 145.0354], 'auto', 'auto', 'Float')
    this.outputTimes = this.getIqamahTimes()
  }

  private getIqamahTimes(): OutputPrayerTimes {
    const output = Object.entries(this.prayTimes)
      .filter(([k, v]) => this.outputPrayerNames.has(k as any))
      .map(([k, v]) => ({
            name: k as OutputPrayerTimesNames,
            athan: this.to12HourFormat(v),
            iqamah: this.getIqamahTime(k as OutputPrayerTimesNames)
        }))

    return output
  }

  private getIqamahTime(timeName: OutputPrayerTimesNames): string {
    if (timeName in this.hardcodedTimes) return this.hardcodedTimes[timeName]!

    let time = this.prayTimes[timeName]
    let offset = this.offset[timeName]
    if (offset !== undefined) {
      time += offset / 60
    }
    return this.to12HourFormat(time)
  }

  private to12HourFormat(time: number): string {
    let minutes = Math.round((time % 1) * 60)
    let hours = (Math.floor(time) + Math.floor(minutes / 60)) % 24
    minutes %= 60
    let suffix = (hours < 12) ? this.AM_SUFFIX : this.PM_SUFFIX
    hours = (hours % 12) || 12
    return this.leftFill2Digits(hours) + ':' + this.leftFill2Digits(minutes) + ' ' + suffix
  }

  private leftFill2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }




  ngOnInit(): void {
    console.log(this.prayTimes);
    console.log(this.outputTimes);
  }


  getNextPrayer() {
    let currentDate = this.today
    let currentTime = currentDate.getHours() + currentDate.getMinutes() / 60;
    let prevTime = 24;
    let nextPrayer = 'fajr';
    for (const prayer of this.outputTimes) {
      let prayerTime = prayer.athan
      let time = this.timeToFloat(prayerTime);
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
    let [timeArray, suffix] = time.split(' ')
    let [hours, minutes] = timeArray.split(':').map(x => +x)
    hours += suffix === this.PM_SUFFIX ? 12 : 0
    return hours + minutes / 60;
  }
}
