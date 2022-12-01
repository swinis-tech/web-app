import {Component, OnInit} from '@angular/core';
import data from '../../../data/prayers.json';
import {PrayerTimesService} from '../../../../prayer-times/prayer-times.service';

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

  constructor(public prayerTimesService: PrayerTimesService) {
  }

  ngOnInit(): void {
    console.log(this.prayerTimes);
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

}
