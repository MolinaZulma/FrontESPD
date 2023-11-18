import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamageReportComponent } from './damage-report.component';

const routes: Routes = [{ path: '', component: DamageReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamageReportRoutingModule { }
