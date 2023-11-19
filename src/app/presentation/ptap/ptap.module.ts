import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtapRoutingModule } from './ptap-routing.module';
import { PtapComponent } from './ptap.component';


@NgModule({
  declarations: [
    PtapComponent
  ],
  imports: [
    CommonModule,
    PtapRoutingModule
  ]
})
export class PtapModule { }
