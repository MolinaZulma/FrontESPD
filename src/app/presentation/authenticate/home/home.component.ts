import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../common-component/footer/footer.component';
import { HeaderComponent } from '../../common-component/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, FooterComponent, HeaderComponent],
})
export class HomeComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {}

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
