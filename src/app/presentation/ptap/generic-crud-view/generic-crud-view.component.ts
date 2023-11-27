import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpMediator } from 'src/app/application/meadiator/HttpMediator';
import { ExcelService } from 'src/app/application/services/excel/excel.service';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';

@Component({
  selector: 'app-generic-crud-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-crud-view.component.html',
  styleUrl: './generic-crud-view.component.css',
})
export abstract class GenericCrudViewComponent {
  protected readonly _router: Router;
  protected readonly _toastr: ToastrService;
  protected readonly _formBuilder: FormBuilder;
  protected readonly _httpMediator: HttpMediator;
  protected readonly _excelService: ExcelService;

  constructor(private readonly _facadeLocatorService: FacadeLocatorService) {
    this._router = this._facadeLocatorService.getRouter();
    this._toastr = this._facadeLocatorService.getToastrService();
    this._formBuilder = this._facadeLocatorService.getFormBuilder();
    this._httpMediator = this._facadeLocatorService.getHttpMediator();
    this._excelService = this._facadeLocatorService.getExcelService();
  }
}
