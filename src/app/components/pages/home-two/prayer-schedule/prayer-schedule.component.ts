import {Component, OnInit} from '@angular/core';
import data from '../../../data/prayers.json';
import {PrayerTimesService} from '../../../../prayer-times/prayer-times.service';

interface Offset {
  asr: number,
  maghrib: number,
  isha: number
}

@Component({
  selector: 'app-prayer-schedule',
  templateUrl: './prayer-schedule.component.html',
  styleUrls: ['./prayer-schedule.component.css'],
})
export class PrayerScheduleComponent implements OnInit {
  private readonly daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private readonly prayerNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
  public prayerTimes = Object.entries(this.prayerTimesService.getTimes(new Date(), [-37.8226, 145.0354])).map(([k, v]) => ({
    prayer: k, time: v
  })).filter(v => this.prayerNames.includes(v.prayer.toLowerCase()));

  public offset: Offset = {
    asr: 10,
    maghrib: 7,
    isha: 15
  }


  public iqamahTimes = this.prayerTimes.map(prayer => {
    if (prayer.prayer in this.offset) {
      // @ts-ignore
      return {
        ...prayer,
        iqamah: this.floatToTime(this.timeToFloat(prayer.time)  + this.offset[prayer.prayer as keyof Offset] / 60)
      }
    } else if (prayer.prayer === "dhuhr") {
      return {
        ...prayer,
        iqamah: "13:45"
      }
    } else {
      return {
        ...prayer,
        iqamah: prayer.time.toString()
      }
    }
  })

  constructor(public prayerTimesService: PrayerTimesService) {
  }

  ngOnInit(): void {
    console.log(this.prayerTimes);
    console.log(this.iqamahTimes);
  }

  getDayOfWeek() {
    return this.daysOfWeek[(new Date()).getDay()];
  }

  getNextPrayer() {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + currentDate.getMinutes() / 60;
    let prevTime = 24;
    let nextPrayer = 'fajr';
    for (const prayer of this.prayerTimes) {
      let prayerTime = prayer.time;
      let time = this.timeToFloat(prayerTime);
      if (time >= currentTime && time < prevTime) {
        prevTime = time;
        nextPrayer = prayer.prayer;
      }
    }
    return nextPrayer;
  }

  /**
   * @param time string in "hh:mm: format, e.g. "09:34"
   */
  timeToFloat(time: string) {
    let timeArray = time.split(':').map(x => +x);
    let hours = timeArray[0];
    let minutes = timeArray[1];
    return hours + minutes / 60;
  }

  floatToTime(time: number) {
    console.log(time)
    let hour = Math.floor(time)
    console.log(hour)
    let min = time % 1
    return hour + ":" + Math.round(min * 60)
  }

}
