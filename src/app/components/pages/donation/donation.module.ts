import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DonationRoutingModule } from './donation-routing.module';
import { DonationComponent } from './donation.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    DonationComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DonationRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class DonationModule { }
