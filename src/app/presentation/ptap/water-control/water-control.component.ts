import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IListWaterControlDTO } from 'src/app/application/DTO/waterControlForm/IListWaterControlDTO';
import { ICreateWaterControlDTO } from 'src/app/application/DTO/waterControlForm/ICreateWaterControlDTO';
import { WaterControlService } from 'src/app/application/features/waterControl/command/water-control.service';
import { HttpMediator, HttpMediatorCallbacks, CommandParamsWithPayload, CommandParamsNoPayload } from 'src/app/application/meadiator/HttpMediator';
import { IListActivityDTO } from 'src/app/application/DTO/activityLogs/IListActivityDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { WaterControlCommandService } from 'src/app/application/features/waterControl/query/water-control-command.service';

@Component({
  selector: 'app-water-control',
  templateUrl: './water-control.component.html',
  styleUrls: ['./water-control.component.css']
})
export class WaterControlComponent implements OnInit {
  public ICreateWaterControlDTO!: FormGroup;
  public errorMessage!: string | null;
  public showModal: boolean = false
  public selectedActivity: IListWaterControlDTO | null = null;
  public iListWaterControlDTO!: IListWaterControlDTO[]

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getIListActivityDTO()
  }

  private initForm(): void {
    this.ICreateWaterControlDTO = this._formBuilder.group({
      totalHours: ['', [Validators.required]],
      amountWaterCaptured: ['', [Validators.required]],
      amountWaterSupplied: ['', [Validators.required]],
      aluminumSulfate: ['', [Validators.required]],
      sodiumHypochlorite: ['', [Validators.required]],
      chlorineGas: ['', [Validators.required]],
      particlesPerMillion: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListWaterControlDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    
    const params: CommandParamsWithPayload<ICreateWaterControlDTO, IListWaterControlDTO> = {
      commandClass: WaterControlService,
      method: WaterControlService.prototype.CreateWaterControlDTO,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(iListActivityDTO: IListWaterControlDTO): void {
    this.goHome()
    console.log(iListActivityDTO);
  }

  public handleError(error: any): void {
    console.log(error);
  }

  private getAuthenticateDTO(): ICreateWaterControlDTO {
    return {
      totalHours: this.ICreateWaterControlDTO.get('totalHours')?.value  ?? '' ,
      amountWaterCaptured: this.ICreateWaterControlDTO.get('amountWaterCaptured')?.value  ?? '' ,
      amountWaterSupplied: this.ICreateWaterControlDTO.get('amountWaterSupplied')?.value  ?? '' ,
      aluminumSulfate: this.ICreateWaterControlDTO.get('aluminumSulfate')?.value  ?? '' ,
      sodiumHypochlorite: this.ICreateWaterControlDTO.get('sodiumHypochlorite')?.value  ?? '' ,
      chlorineGas: this.ICreateWaterControlDTO.get('chlorineGas')?.value  ?? '' ,
      particlesPerMillion: this.ICreateWaterControlDTO.get('particlesPerMillion')?.value  ?? '' ,
      idPlant: 1, // ptap,
      nationalIdentificationNumber: JSON.parse(sessionStorage['userInfo']).nationalIdentificationNumber,
    };
  }

  private getIListActivityDTO(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListWaterControlDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListWaterControlDTO>> = {
      commandClass: WaterControlCommandService,
      method: WaterControlCommandService.prototype.getListWaterControlCommandService,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }
  
  public goHome(): void {
    this._router.navigate(['ptap', 'home'])
  }

  public setList(iListWaterControlDTO: ISerialize<IListWaterControlDTO>): void {
    this.iListWaterControlDTO = iListWaterControlDTO.data;
  }

  public openDetailModal(activity: IListWaterControlDTO): void {
    this.showModal = true
    this.selectedActivity = activity;
  }

  public closeModal(): void {
    this.showModal = false
    this.selectedActivity = null;
  }
}
