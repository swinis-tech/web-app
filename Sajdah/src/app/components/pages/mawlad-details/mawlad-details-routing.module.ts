import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MawladDetailsComponent } from './mawlad-details.component';

const routes: Routes = [{ path: '', component: MawladDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MawladDetailsRoutingModule { }
