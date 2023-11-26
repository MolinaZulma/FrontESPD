import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public readonly userName: string = JSON.parse(sessionStorage['userInfo']).userName;

  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {
    // this._router.navigate(['ptap', 'home']);
  }

  public goHome(): void {
    this._router.navigate(['ptap', 'home']);
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
