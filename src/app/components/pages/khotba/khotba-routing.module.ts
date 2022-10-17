import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhotbaComponent } from './khotba.component';

const routes: Routes = [{ path: '', component: KhotbaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhotbaRoutingModule { }
