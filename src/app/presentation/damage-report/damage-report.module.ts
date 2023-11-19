import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamageReportRoutingModule } from './damage-report-routing.module';
import { DamageReportComponent } from './damage-report.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DamageReportComponent, CreateReportComponent],
  imports: [
    CommonModule,
    DamageReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DamageReportModule {}
