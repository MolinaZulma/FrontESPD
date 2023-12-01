import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtapComponent } from './ptap.component';
import { HomeComponent } from './home/home.component';
import { ActivityRegisterComponent } from './activity-register/activity-register.component';
import { PtapFormatComponent } from './ptap-format/ptap-format.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { JardFormatComponent } from './jard-format/jard-format.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DamageReportComponent } from './damage-report/damage-report.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: PtapComponent,
    children: [
      { path: 'user', component: UsersComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ptap-format', component: PtapFormatComponent },
      { path: 'jard-format', component: JardFormatComponent },
      { path: 'DamageReport', component: DamageReportComponent },
      { path: 'water-control', component: WaterControlComponent },
      { path: 'activity-register', component: ActivityRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtapRoutingModule {}
