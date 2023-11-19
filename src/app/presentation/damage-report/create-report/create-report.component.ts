import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IDamageReport } from 'src/app/domain/models/IDamageReport.model';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import { DamageCommandService } from 'src/app/application/features/damageReport/command/damage-command.service';
import { CommandParamsWithPayload, HttpMediator, HttpMediatorCallbacks } from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css'],
})
export class CreateReportComponent implements OnInit {
  public errorMessage: string | null = null;
  public damageReport!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.damageReport = this._formBuilder.group({
      addressDamage: ['', [Validators.required]],
      descriptionDamage: ['', [Validators.required]],
      typeDamage: ['', [Validators.required]],
      trueInformation: ['', []],
      terminos: ['', []],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListDamageDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<IDamageReport, IListDamageDTO> = {
      commandClass: AuthCommandService,
      method: DamageCommandService.prototype.postDamage,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(): void {}

  public handleError(): void {}

  private getAuthenticateDTO(): IDamageReport {
    const trueInformationChecked = this.damageReport.get('trueInformation')?.value;
    const terminosChecked = this.damageReport.get('terminos')?.value; //

    const n: IDamageReport = {
      addressDamage: this.damageReport.get('addressDamage')?.value ?? '',
      descriptionDamage: this.damageReport.get('descriptionDamage')?.value ?? '',
      image: sessionStorage['DamageImage'],
      trueInformation: trueInformationChecked ? 'true' : 'false',
      typeDamage: this.damageReport.get('typeDamage')?.value ?? '',
      nationalIdentificationNumber: JSON.parse(sessionStorage['usetInfo']).nationalIdentificationNumber,
    };
    debugger;
    console.log(n);
    return n;
  }

  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.convertToBase64(file);
    }
  }

  private convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image: string | ArrayBuffer | null = reader.result;
      sessionStorage.setItem('DamageImage', base64Image as string);
    };
    reader.readAsDataURL(file);
  }
}
