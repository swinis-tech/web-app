import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { KhotbaDetailsRoutingModule } from './khotba-details-routing.module';
import { KhotbaDetailsComponent } from './khotba-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    KhotbaDetailsComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    KhotbaDetailsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class KhotbaDetailsModule { }
