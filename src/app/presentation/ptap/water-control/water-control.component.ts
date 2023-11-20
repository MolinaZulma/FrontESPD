import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IListWaterControlDTO } from 'src/app/application/DTO/waterControlForm/IListWaterControlDTO';
import { ICreateWaterControlDTO } from 'src/app/application/DTO/waterControlForm/ICreateWaterControlDTO';
import { WaterControlService } from 'src/app/application/features/waterControl/command/water-control.service';
import { HttpMediator, HttpMediatorCallbacks, CommandParamsWithPayload } from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-water-control',
  templateUrl: './water-control.component.html',
  styleUrls: ['./water-control.component.css']
})
export class WaterControlComponent implements OnInit {
  public ICreateWaterControlDTO!: FormGroup;
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
  
  public goHome(): void {
    this._router.navigate(['ptap', 'home'])
  }
}
