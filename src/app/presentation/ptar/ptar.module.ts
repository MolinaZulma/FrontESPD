import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtarRoutingModule } from './ptar-routing.module';
import { PtarComponent } from './ptar.component';


@NgModule({
  declarations: [
    PtarComponent
  ],
  imports: [
    CommonModule,
    PtarRoutingModule
  ]
})
export class PtarModule { }
