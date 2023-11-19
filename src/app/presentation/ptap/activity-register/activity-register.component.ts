import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateActivityDTO } from 'src/app/application/DTO/activityLogs/ICreateActivityDTO';
import { IListActivityDTO } from 'src/app/application/DTO/activityLogs/IListActivityDTO';
import { ActivityRegisterService } from 'src/app/application/features/activityRegister/command/activity-register.service';
import {
  HttpMediator,
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
} from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-activity-register',
  templateUrl: './activity-register.component.html',
  styleUrls: ['./activity-register.component.css'],
})

export class ActivityRegisterComponent implements OnInit {
  public ICreateActivityDTO!: FormGroup;
  public errorMessage!: string | null;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.ICreateActivityDTO = this._formBuilder.group({
      TypeActivity: ['', [Validators.required]],
      Observations: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    debugger;
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListActivityDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<ICreateActivityDTO, IListActivityDTO> = {
      commandClass: ActivityRegisterService,
      method: ActivityRegisterService.prototype.createActivity,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(iListActivityDTO: IListActivityDTO): void {
    console.log(iListActivityDTO);
  }

  public handleError(error: any): void {
    console.log(error);
  }

  private getAuthenticateDTO(): ICreateActivityDTO {
    return {
      IdPlant: 1, // ptap,
      TypeActivity: this.ICreateActivityDTO.get('TypeActivity')?.value ?? '',
      Observations: this.ICreateActivityDTO.get('Observations')?.value ?? '',
      NationalIdentificationNumber: JSON.parse(sessionStorage['userInfo']).nationalIdentificationNumber,
    };
  }
}
