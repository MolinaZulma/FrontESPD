import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

import { ExcelService } from '../excel/excel.service';
import { HttpMediator } from '../../meadiator/HttpMediator';
import { AvailableViewsService } from '../availableViews/available-views.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeLocatorService {
  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator,
    private readonly _excelService: ExcelService,
    private readonly _toastrService: ToastrService,
    private readonly _availableViews: AvailableViewsService,
  ) {}

  public getRouter(): Router {
    return this._router;
  }
  public getToastrService(): ToastrService {
    return this._toastrService;
  }
  public getExcelService(): ExcelService {
    return this._excelService;
  }
  public getFormBuilder(): FormBuilder {
    return this._formBuilder;
  }
  public getHttpMediator(): HttpMediator {
    return this._httpMediator;
  }
  public getAvailableViews(): AvailableViewsService {
    return this._availableViews;
  }
}
