import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {
    this.renderAuthHome();
  }

  public renderAuthHome(): void {
    this._router.navigate(['authenticate', 'home']);
  }

  public renderAuthOptions(): void {
    this._router.navigate(['authenticate', 'auth-options']);
  }

  public renderSignupForm(): void {
    this._router.navigate(['authenticate', 'singn-up']);
  }

  public renderSigninForm(): void {
    this._router.navigate(['authenticate', 'singn-in']);
  }
}
