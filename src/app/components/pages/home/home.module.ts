import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { CounterComponent } from './counter/counter.component';
import { RecentMawladsComponent } from './recent-mawlads/recent-mawlads.component';
import { RecentKhotbaComponent } from './recent-khotba/recent-khotba.component';
import { VideoComponent } from './video/video.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutTextComponent,
    CounterComponent,
    RecentMawladsComponent,
    RecentKhotbaComponent,
    VideoComponent,
    GalleryComponent,
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgbModule,
    CountUpModule,
    CarouselModule,
    NgxMasonryModule,
  ],
})
export class HomeModule {}
