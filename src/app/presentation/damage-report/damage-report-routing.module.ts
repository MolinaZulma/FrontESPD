import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamageReportComponent } from './damage-report.component';
import { CreateReportComponent } from './create-report/create-report.component';

const routes: Routes = [
  {
    path: '',
    component: DamageReportComponent,
    children: [{ path: 'CreateReport', component: CreateReportComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DamageReportRoutingModule {}
