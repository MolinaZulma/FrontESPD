import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtapRoutingModule } from './ptap-routing.module';
import { PtapComponent } from './ptap.component';
import { HomeComponent } from './home/home.component';
import { PtapFormatComponent } from './ptap-format/ptap-format.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { ActivityRegisterComponent } from './activity-register/activity-register.component';
import { JardFormatComponent } from './jard-format/jard-format.component';


@NgModule({
  declarations: [
    PtapComponent,
    HomeComponent,
    PtapFormatComponent,
    WaterControlComponent,
    ActivityRegisterComponent,
    JardFormatComponent
  ],
  imports: [
    CommonModule,
    PtapRoutingModule
  ]
})
export class PtapModule { }
