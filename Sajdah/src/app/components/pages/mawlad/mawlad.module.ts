import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { MawladRoutingModule } from './mawlad-routing.module';
import { MawladComponent } from './mawlad.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    MawladComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MawladRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class MawladModule { }
