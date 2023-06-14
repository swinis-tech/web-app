import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { PrayerStylesComponent } from './prayer-styles/prayer-styles.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    SingleTeamComponent,
    AboutUsComponent,
    TeamComponent,
    PrayerStylesComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule, NgbModule],
})
export class AboutModule {}
