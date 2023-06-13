import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import {PrayerScheduleComponent} from "./app/components/pages/home-two/prayer-schedule/prayer-schedule.component";
import {bootstrapApplication} from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(PrayerScheduleComponent)
