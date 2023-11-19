import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICreateFormatPTAP } from 'src/app/application/DTO/formatPTAP/ICreateFormatPTAPDTO';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import { CommandParamsWithPayload, HttpMediator, HttpMediatorCallbacks,} from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-ptap-format',
  templateUrl: './ptap-format.component.html',
  styleUrls: ['./ptap-format.component.css'],
})
export class PtapFormatComponent implements OnInit {
  public createFormatPTAP!: FormGroup;
  public errorMessage!: string | null;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.createFormatPTAP = this._formBuilder.group({
      Alkaline: ['', [Validators.required]],
      IdPlant: ['', [Validators.required]],
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
    debugger;
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<any> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<any, any> = {
      commandClass: AuthCommandService,
      method: AuthCommandService.prototype.authenticate,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(): void {}
  public handleError(): void {}

  private getAuthenticateDTO(): ICreateFormatPTAP {
    return {
      IdPlant: 1, // ptap
      Alkaline: this.createFormatPTAP.get('Alkaline')?.value ?? '',
      TypeWater: this.createFormatPTAP.get('TypeWater')?.value ?? '',
      ChlorineGas: this.createFormatPTAP.get('ChlorineGas')?.value ?? '',
      Temperature: this.createFormatPTAP.get('Temperature')?.value ?? '',
      AlkalinityPh: this.createFormatPTAP.get('AlkalinityPh')?.value ?? '',
      AlkalineTotal: this.createFormatPTAP.get('AlkalineTotal')?.value ?? '',
      AlkalineChlorine: this.createFormatPTAP.get('AlkalineChlorine')?.value ?? '',
      ParticlesPerMillion: this.createFormatPTAP.get('ParticlesPerMillion')?.value ?? '',
      AlkalineFinalReading: this.createFormatPTAP.get('AlkalineFinalReading')?.value ?? '',
      AlkalineInitialReading: this.createFormatPTAP.get('AlkalineInitialReading')?.value ?? '',
      NationalIdentificationNumber: JSON.parse(sessionStorage['usetInfo']).nationalIdentificationNumber,
    };
  }
}
