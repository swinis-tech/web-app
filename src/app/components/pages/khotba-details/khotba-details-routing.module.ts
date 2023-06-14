import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhotbaDetailsComponent } from './khotba-details.component';

const routes: Routes = [{ path: '', component: KhotbaDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotbaDetailsRoutingModule {}
