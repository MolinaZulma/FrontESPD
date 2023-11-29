import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate.component';
import { AuthOptionsComponent } from './auth-options/auth-options.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SingnInComponent } from './singn-in/singn-in.component';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticateComponent,
    children: [
      { path: 'singn-up', component: SingnUpComponent },
      { path: 'singn-in', component: SingnInComponent },
      { path: 'password-reset', component: PasswordResetComponent },
      { path: 'auth-options', component: AuthOptionsComponent },
      { path: 'home', component: HomeComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticateRoutingModule {}
