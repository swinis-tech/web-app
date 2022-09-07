import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MawladComponent } from './mawlad.component';

const routes: Routes = [{ path: '', component: MawladComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MawladRoutingModule { }
