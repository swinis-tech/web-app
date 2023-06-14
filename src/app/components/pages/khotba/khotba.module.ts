import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { KhotbaRoutingModule } from './khotba-routing.module';
import { KhotbaComponent } from './khotba.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [KhotbaComponent, ContentComponent],
  imports: [
    CommonModule,
    KhotbaRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
  ],
})
export class KhotbaModule {}
