import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ng2-countdown-timer';

import { MawladDetailsRoutingModule } from './mawlad-details-routing.module';
import { MawladDetailsComponent } from './mawlad-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [MawladDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    MawladDetailsRoutingModule,
    SharedModule,
    NgbModule,
    CountdownModule,
  ],
})
export class MawladDetailsModule {}
