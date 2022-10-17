import { Component, OnInit } from '@angular/core';
import data from "../../../data/prayers.json";

@Component({
  selector: 'app-prayer-schedule',
  templateUrl: './prayer-schedule.component.html',
  styleUrls: ['./prayer-schedule.component.css']
})
export class PrayerScheduleComponent implements OnInit {
  public prayers = data;
  constructor() { }

  ngOnInit(): void {
  }

}
