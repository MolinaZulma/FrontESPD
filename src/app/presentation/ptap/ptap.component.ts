import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ptap',
  templateUrl: './ptap.component.html',
  styleUrls: ['./ptap.component.css'],
})
export class PtapComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {
    this.setRoute();
  }

  public setRoute(): void {
    const role = JSON.parse(sessionStorage['userInfo'])?.roles[0];
    const isEmployee = [EnumRoles.Ptar, EnumRoles.Ptap, EnumRoles.Administrator,].includes(role);

    if (isEmployee) {
      this._router.navigate(['ptap', 'home']);
    }
  }
}

export enum EnumRoles {
  Ptap = 'Ptap',
  Ptar = 'Ptar',
  User = 'User',
  Administrator = 'Administrator',
}
