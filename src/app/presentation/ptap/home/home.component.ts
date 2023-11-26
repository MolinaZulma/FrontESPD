import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public readonly isPtar: boolean;

  constructor(private readonly _router: Router) {
    const userInfo = sessionStorage['userInfo'];
    if (userInfo) {
      const role = JSON.parse(userInfo)?.roles[0];
      this.isPtar = role === EnumRoles.Ptap.toString() || role === EnumRoles.Administrator.toString();
    } else {
      this.isPtar = false;
    }
    
    const role = JSON.parse(sessionStorage['userInfo'])?.roles[0];
    if (role === 'Administrator') {
      this.isPtar = true;
      // this._router.navigate(['ptap', 'dashboard']);
    }
  }

  public ngOnInit(): void {
    this.authorizeViewsOnRole();
  }
  private authorizeViewsOnRole() {

  }
  public waterControll(): void {
    this._router.navigate(['ptap', 'water-control']);
  }
  public activityRegister(): void {
    this._router.navigate(['ptap', 'activity-register']);
  }
  public jardFormat(): void {
    this._router.navigate(['ptap', 'jard-format']);
  }
  public ptapFormat(): void {
    this._router.navigate(['ptap', 'ptap-format']);
  }
  public dashboard(): void {
    this._router.navigate(['ptap', 'dashboard']);
  }
}

export enum EnumRoles {
  Ptap = 'Ptap',
  Ptar = 'Ptar',
  User = 'User',
  Administrator = 'Administrator',
}