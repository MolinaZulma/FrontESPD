import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICreateActivityDTO } from 'src/app/application/DTO/activityLogs/ICreateActivityDTO';
import { IListActivityDTO } from 'src/app/application/DTO/activityLogs/IListActivityDTO';
import { ActivityRegisterService } from 'src/app/application/features/activityRegister/command/activity-register.service';
import { ActivityRegisterQueryService } from 'src/app/application/features/activityRegister/query/activity-register-query.service';
import {
  HttpMediator,
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
  CommandParamsNoPayload,
} from 'src/app/application/meadiator/HttpMediator';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { ActivityDetailModalComponent } from '../activity-detail-modal/activity-detail-modal.component';
import { ExcelService } from 'src/app/application/services/excel/excel.service';
import { GenericCrudViewComponent } from '../generic-crud-view/generic-crud-view.component';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';

@Component({
  selector: 'app-activity-register',
  templateUrl: './activity-register.component.html',
  styleUrls: ['./activity-register.component.css'],
})
export class ActivityRegisterComponent
  extends GenericCrudViewComponent
  implements OnInit
{
  public showModal: boolean = false;
  public errorMessage!: string | null;
  public ICreateActivityDTO!: FormGroup;
  public ListActivityDTO!: IListActivityDTO[];
  public selectedActivity: IListActivityDTO | null = null;

  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
  }

  public ngOnInit(): void {
    this.initForm();
    this.getIListActivityDTO();
  }

  private getIListActivityDTO(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListActivityDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListActivityDTO>> = {
      commandClass: ActivityRegisterQueryService,
      method: ActivityRegisterQueryService.prototype.getListActivityRegister,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }

  public setList(ListActivityDTO: ISerialize<IListActivityDTO>): void {
    this.ListActivityDTO = ListActivityDTO.data;
    this.ListActivityDTO.sort((a, b) => {
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      return dateB.getTime() - dateA.getTime();
    });
  }

  public openDetailModal(activity: IListActivityDTO): void {
    this.showModal = true;
    this.selectedActivity = activity;
  }

  public closeModal(): void {
    this.showModal = false;
    this.selectedActivity = null;
  }

  private initForm(): void {
    this.ICreateActivityDTO = this._formBuilder.group({
      TypeActivity: ['', [Validators.required]],
      Observations: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    const allow = confirm('estas seguro de continuar');
    if (allow) {
      this.post();
    }
  }

  private post(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListActivityDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<
      ICreateActivityDTO,
      IListActivityDTO
    > = {
      commandClass: ActivityRegisterService,
      method: ActivityRegisterService.prototype.createActivity,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(iListActivityDTO: IListActivityDTO): void {
    this._toastr.success('Registro de actividad cargada', 'Exitoso!');
    this.goHome();
  }

  public handleError(error: any): void {
    console.log(error);
  }

  private getAuthenticateDTO(): ICreateActivityDTO {
    return {
      idPlant: 1, // ptap,
      typeActivity: this.ICreateActivityDTO.get('TypeActivity')?.value ?? '',
      observations: this.ICreateActivityDTO.get('Observations')?.value ?? '',
      nationalIdentificationNumber: JSON.parse(sessionStorage['userInfo'])
        .nationalIdentificationNumber,
    };
  }

  public goHome(): void {
    this._router.navigate(['ptap', 'home']);
  }

  public downloadExcel(): void {
    if (this.selectedActivity) {
      this._excelService
        .generateExcelFile([this.selectedActivity], 'test-file')
        .subscribe(() => {
          console.log('Excel file generated and downloaded successfully!');
        });
    }
  }
}
