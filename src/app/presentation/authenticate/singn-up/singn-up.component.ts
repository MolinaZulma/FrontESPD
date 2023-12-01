import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterDTO } from 'src/app/application/DTO/auth/IRegisterDTO';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import {
  HttpMediator,
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
} from 'src/app/application/meadiator/HttpMediator';
import {
  IListTokenDTO,
  ICreateTokenDTO,
} from '../auth-options/auth-options.component';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';
import { GenericCrudViewComponent } from '../../ptap/generic-crud-view/generic-crud-view.component';
import { EnumRoles } from 'src/app/application/services/availableViews/available-views.service';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css'],
})
// IRegisterDTO
export class SingnUpComponent
  extends GenericCrudViewComponent
  implements OnInit
{
  public errorMessage: string | null = null;
  public signUpForm!: FormGroup;
  private createUserDTO!: ICreateUserDTO;

  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.signUpForm = this._formBuilder.group({
      nationalIdentificationNumber: ['', [Validators.minLength(1)]],
      email: ['', [Validators.minLength(1)]],
      userName: ['', [Validators.minLength(1)]],
      password: ['', [Validators.minLength(1)]],
      confirmPassword: ['', [Validators.minLength(1)]],
      fullName: ['', [Validators.minLength(1)]],
      phoneNumber: ['', [Validators.minLength(1)]],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListUserCreatedDTO> = {
      success: this.getClientIdCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<
      ICreateUserDTO,
      IListUserCreatedDTO
    > = {
      commandClass: AuthCommandService,
      method: AuthCommandService.prototype.register,
      data: this.getCreateNewUserDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  private getClientIdCreated(iListUserCreatedDTO: IListUserCreatedDTO): void {
    this.generateSession();
  }

  public generateSession(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListTokenDTO> = {
      success: this.setToken.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<ICreateTokenDTO, IListTokenDTO> = {
      commandClass: AuthCommandService,
      method: AuthCommandService.prototype.authenticate,
      data: this.getClientCredenctials(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  private setToken(tokenObject: IListTokenDTO): void {
    sessionStorage.setItem('userInfo', JSON.stringify(tokenObject.data));
    const role = tokenObject.data.roles[0];
    if (role) {
      if (role === EnumRoles.User.toString()) {
        this._router.navigate(['damageReport']);
      } else {
        this._router.navigate(['ptap']);
      }
    }
  }

  public getClientCredenctials = (): ICreateTokenDTO => ({
    email: this.createUserDTO.email,
    password: this.createUserDTO.password,
  });

  private getCreateNewUserDTO(): ICreateUserDTO {
    this.createUserDTO = {
      nationalIdentificationNumber:
        this.signUpForm.get('nationalIdentificationNumber')?.value ?? '',
      email: this.signUpForm.get('email')?.value ?? '',
      userName: this.signUpForm.get('userName')?.value ?? '',
      password: this.signUpForm.get('password')?.value ?? '',
      confirmPassword: this.signUpForm.get('password')?.value ?? '',
      fullName: this.signUpForm.get('fullName')?.value ?? '',
      phoneNumber: this.signUpForm.get('phoneNumber')?.value ?? '',
      nameRole: EnumRoles.User.toString(),
    };
    return this.createUserDTO;
  }

  private handleError(error: string): void {
    console.log(error);
  }

  public renderResetPassword(): void {
    this._router.navigate(['auth', 'password-reset']);
  }

  public renderSignupForm(): void {
    this._router.navigate(['auth', 'singn-up']);
  }

  public renderAuthOptions(): void {
    this._router.navigate(['authenticate', 'auth-options']);
  }
}

export interface ICreateUserDTO {
  nationalIdentificationNumber: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  nameRole: string;
}

export interface IListUserCreatedDTO {
  data: string;
  message: string;
  succeed: boolean;
  errors: null;
  statusCode: number;
}
