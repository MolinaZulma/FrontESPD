import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import {
  CommandParamsWithPayload,
  HttpMediator,
  HttpMediatorCallbacks,
} from 'src/app/application/meadiator/HttpMediator';
import { IDamageReport } from 'src/app/domain/models/IDamageReport.model';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { DamageCommandService } from 'src/app/application/features/damageReport/command/damage-command.service';

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
      addressDamage: ['', [Validators.required, ]],
      descriptionDamage: ['', [Validators.required, ]],
      image: ['', [Validators.required, ]],
      trueInformation: ['', [Validators.required, ]],
      typeDamage: ['', [Validators.required, ]],
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
    return {
      addressDamage: this.damageReport.get('addressDamage')?.value ?? '',
      descriptionDamage: this.damageReport.get('descriptionDamage')?.value ?? '',
      image: this.damageReport.get('image')?.value ?? '',
      trueInformation: this.damageReport.get('trueInformation')?.value ?? '',
      typeDamage: this.damageReport.get('typeDamage')?.value ?? '',
      idUser: JSON.parse(sessionStorage['usetInfo']).nationalIdentificationNumber,
    };
  }
}
