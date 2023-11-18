import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authenticate',
    loadChildren: () =>
      import('./presentation/authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      ),
  },
  {
    path: 'damageReport',
    loadChildren: () =>
      import('./presentation/damage-report/damage-report.module').then(
        (m) => m.DamageReportModule
      ),
  },
  { path: '**', redirectTo: 'authenticate/auth-options', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
