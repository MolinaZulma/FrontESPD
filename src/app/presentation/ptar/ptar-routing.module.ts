import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtarComponent } from './ptar.component';

const routes: Routes = [{ path: '', component: PtarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtarRoutingModule { }
