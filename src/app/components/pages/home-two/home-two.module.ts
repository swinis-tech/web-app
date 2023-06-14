import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
// import { NgMasonryGridModule  } from 'ng-masonry-grid';
import { CountdownModule } from 'ng2-countdown-timer';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { CounterComponent } from './counter/counter.component';
import { RecentMalwadsComponent } from './recent-malwads/recent-malwads.component';
import { RecentKhotbaComponent } from './recent-khotba/recent-khotba.component';
import { UpcomingMalwadsComponent } from './upcoming-malwads/upcoming-malwads.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrayerScheduleComponent } from './prayer-schedule/prayer-schedule.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    AboutTextComponent,
    CounterComponent,
    RecentMalwadsComponent,
    RecentKhotbaComponent,
    UpcomingMalwadsComponent,
    GalleryComponent,
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    CountUpModule,
    // NgMasonryGridModule,
    CountdownModule,
  ],
})
export class HomeTwoModule {}
