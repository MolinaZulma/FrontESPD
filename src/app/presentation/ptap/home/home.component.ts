import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public readonly isPtar: boolean

  constructor(private readonly _router: Router) {
    this.isPtar = true
  }

  public ngOnInit(): void {}

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
