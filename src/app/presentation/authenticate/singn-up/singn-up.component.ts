import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterDTO } from 'src/app/application/DTO/auth/IRegisterDTO';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import { HttpMediator, HttpMediatorCallbacks, CommandParamsWithPayload } from 'src/app/application/meadiator/HttpMediator';
import { IListTokenDTO, ICreateTokenDTO } from '../auth-options/auth-options.component';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css']
})
// IRegisterDTO
export class SingnUpComponent implements OnInit {
  public errorMessage: string | null = null;
  public signInForm!: FormGroup;
  //missing all changes to edit as CREATE ACCOUNT
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
    this._router.navigate(['ptap']);
  }

  private getAuthenticateDTO(): any /*IRegisterDTO*/ {
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
    this._router.navigate(['auth', 'singn-up']);
  }
}
