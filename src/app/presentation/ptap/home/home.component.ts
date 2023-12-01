import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';
import { EnumRoles } from 'src/app/application/services/availableViews/available-views.service';
import { GenericCrudViewComponent } from '../generic-crud-view/generic-crud-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends GenericCrudViewComponent implements OnInit {
  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
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
  public damageReport(): void {
    this._router.navigate(['ptap', 'DamageReport']);
  }
  public userList(): void {
    this._router.navigate(['ptap', 'user']);
  }
}
