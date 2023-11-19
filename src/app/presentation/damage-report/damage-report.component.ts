import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-damage-report',
  templateUrl: './damage-report.component.html',
  styleUrls: ['./damage-report.component.css'],
})
export class DamageReportComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  public ngOnInit(): void {
    this._router.navigate(['damageReport', 'CreateReport'])
  }
}
