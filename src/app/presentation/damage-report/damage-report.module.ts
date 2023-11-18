import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamageReportRoutingModule } from './damage-report-routing.module';
import { DamageReportComponent } from './damage-report.component';


@NgModule({
  declarations: [
    DamageReportComponent
  ],
  imports: [
    CommonModule,
    DamageReportRoutingModule
  ]
})
export class DamageReportModule { }
