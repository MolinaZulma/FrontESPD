import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtapComponent } from './ptap.component';

const routes: Routes = [{ path: '', component: PtapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtapRoutingModule { }
