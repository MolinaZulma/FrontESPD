import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtapComponent } from './ptap.component';
import { HomeComponent } from './home/home.component';
import { ActivityRegisterComponent } from './activity-register/activity-register.component';
import { PtapFormatComponent } from './ptap-format/ptap-format.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { JardFormatComponent } from './jard-format/jard-format.component';

const routes: Routes = [
  {
    path: '',
    component: PtapComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'activity-register', component: ActivityRegisterComponent },
      { path: 'ptap-format', component: PtapFormatComponent },
      { path: 'water-control', component: WaterControlComponent },
      { path: 'jard-format', component: JardFormatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtapRoutingModule {}
