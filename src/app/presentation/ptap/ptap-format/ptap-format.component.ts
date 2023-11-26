import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICreateFormatPTAP } from 'src/app/application/DTO/formatPTAP/ICreateFormatPTAPDTO';
import {
  CommandParamsNoPayload,
  CommandParamsWithPayload,
  HttpMediator,
  HttpMediatorCallbacks,
} from 'src/app/application/meadiator/HttpMediator';
import { FormatPTAPService } from 'src/app/application/features/formatPTAP/command/format-ptap.service';
import { IListFormatPTAPDTO } from 'src/app/application/DTO/formatPTAP/IListFormatPTAPDTO';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { PtapFormatService } from 'src/app/application/features/formatPTAP/query/ptap-format.service';

@Component({
  selector: 'app-ptap-format',
  templateUrl: './ptap-format.component.html',
  styleUrls: ['./ptap-format.component.css'],
})
export class PtapFormatComponent implements OnInit {
  public createFormatPTAP!: FormGroup;
  public errorMessage!: string | null;

  public iListFormatPTAPDTO!: IListFormatPTAPDTO[];
  public showModal: boolean = false;
  public selectedActivity: IListFormatPTAPDTO | null = null;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.getIListPtapFormat();
  }

  private initForm(): void {
    this.createFormatPTAP = this._formBuilder.group({
      Alkaline: ['', [Validators.required]],
      TypeWater: ['', [Validators.required]],
      ChlorineGas: ['', [Validators.required]],
      Temperature: ['', [Validators.required]],
      AlkalinityPh: ['', [Validators.required]],
      AlkalineTotal: ['', [Validators.required]],
      AlkalineChlorine: ['', [Validators.required]],
      ParticlesPerMillion: ['', [Validators.required]],
      AlkalineFinalReading: ['', [Validators.required]],
      AlkalineInitialReading: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListFormatPTAPDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<
      ICreateFormatPTAP,
      IListFormatPTAPDTO
    > = {
      commandClass: FormatPTAPService,
      method: FormatPTAPService.prototype.CreateFormatPTAP,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(ListFormatPTAPDTO: IListFormatPTAPDTO): void {
    this.goHome();
    console.log(ListFormatPTAPDTO);
  }

  public handleError(): void {}

  private getAuthenticateDTO(): ICreateFormatPTAP {
    return {
      idPlant: 1, // ptap
      alkaline: this.createFormatPTAP.get('Alkaline')?.value ?? '',
      typeWater: this.createFormatPTAP.get('TypeWater')?.value ?? '',
      chlorineGas: this.createFormatPTAP.get('ChlorineGas')?.value ?? '',
      temperature: this.createFormatPTAP.get('Temperature')?.value ?? '',
      alkalinityPh: this.createFormatPTAP.get('AlkalinityPh')?.value ?? '',
      alkalineTotal: this.createFormatPTAP.get('AlkalineTotal')?.value ?? '',
      alkalineChlorine:this.createFormatPTAP.get('AlkalineChlorine')?.value ?? '',
      particlesPerMillion:this.createFormatPTAP.get('ParticlesPerMillion')?.value ?? '',
      alkalineFinalReading:this.createFormatPTAP.get('AlkalineFinalReading')?.value ?? '',
      alkalineInitialReading:this.createFormatPTAP.get('AlkalineInitialReading')?.value ?? '',
      nationalIdentificationNumber: JSON.parse(sessionStorage['userInfo']).nationalIdentificationNumber,
    };
  }

  public goHome(): void {
    this._router.navigate(['ptap', 'home']);
  }

  private getIListPtapFormat(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListFormatPTAPDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListFormatPTAPDTO>> = {
      commandClass: PtapFormatService,
      method: PtapFormatService.prototype.getListPtapFormat,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }

  public setList(IListFormatPTAPDTO: ISerialize<IListFormatPTAPDTO>): void {
    this.iListFormatPTAPDTO = IListFormatPTAPDTO.data;
  }

  public openDetailModal(activity: IListFormatPTAPDTO): void {
    this.showModal = true;
    this.selectedActivity = activity;
  }

  public closeModal(): void {
    this.showModal = false;
    this.selectedActivity = null;
  }
}
