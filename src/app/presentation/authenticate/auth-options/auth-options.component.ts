import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import {
  HttpMediator,
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
} from 'src/app/application/meadiator/HttpMediator';
import { EnumRoles } from '../../ptap/home/home.component';

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.css'],
})
export class AuthOptionsComponent implements OnInit {
  public errorMessage: string | null = null;
  public signInForm!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListTokenDTO> = {
      success: this.setToken.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<ICreateTokenDTO, IListTokenDTO> = {
      commandClass: AuthCommandService,
      method: AuthCommandService.prototype.authenticate,
      data: this.getAuthenticateDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  private setToken(tokenObject: IListTokenDTO): void {
    sessionStorage.setItem('userInfo', JSON.stringify(tokenObject.data));
    const role = tokenObject.data.roles[0];
    if (role) {
      if (role === EnumRoles.User.toString()) {
        this._router.navigate(['damageReport',]);
      } else {
        this._router.navigate(['ptap',]);
      }
    }
  }

  private getAuthenticateDTO(): ICreateTokenDTO {
    return {
      email: this.signInForm.get('email')?.value ?? '',
      password: this.signInForm.get('password')?.value ?? '',
    };
  }

  private handleError(error: string): void {
    console.log(error);
  }

  public renderResetPassword(): void {
    this._router.navigate(['auth', 'password-reset']);
  }

  public renderSignupForm(): void {
    console.log(5);

    this._router.navigate(['auth', 'create']);
  }
}

export interface IListTokenDTO {
  data: {
    id: string;
    userName: string;
    email: string;
    roles: string[];
    isVerified: boolean;
    jwToken: string;
  };
  message: string;
  succeed: boolean;
  errors: string;
  statusCode: number;
}

export interface ICreateTokenDTO {
  email: string;
  password: string;
}
