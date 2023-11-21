import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate.component';
import { AuthOptionsComponent } from './auth-options/auth-options.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticateComponent,
    children: [
      { path: 'create', component: SingnUpComponent },
      { path: 'singn-in', component: SingnInComponent },
      { path: 'password-reset', component: PasswordResetComponent },
      { path: 'auth-options', component: AuthOptionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticateRoutingModule {}
