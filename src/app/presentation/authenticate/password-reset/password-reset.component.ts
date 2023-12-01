import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';
import { GenericCrudViewComponent } from '../../ptap/generic-crud-view/generic-crud-view.component';
import { FormGroup, Validators } from '@angular/forms';
import { IResetPassword } from 'src/app/application/DTO/auth/IResetPassword';
import { IListResetPassword } from 'src/app/application/DTO/auth/iListResetPassword';
import { AuthCommandService } from 'src/app/application/features/auth/command/auth-command.service';
import {
  HttpMediatorCallbacks,
  CommandParamsWithPayload,
} from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent extends GenericCrudViewComponent {
  public errorMessage: string | null = null;
  public passwordReset!: FormGroup;
  private resetPassword!: any;

  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.passwordReset = this._formBuilder.group({
      email: ['', [Validators.minLength(1)]],
    });
  }

  public onSubmit(): void {
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListResetPassword> = {
      success: this.getClientResponse.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<IResetPassword, IListResetPassword> =
      {
        commandClass: AuthCommandService,
        method: AuthCommandService.prototype.resetPassword,
        data: this.getCreateNewUserDTO(),
        callbacks,
      };
    this._httpMediator.execWithPayload(params);
  }

  private getClientResponse(iListUserCreatedDTO: IListResetPassword): void {
    console.log(iListUserCreatedDTO);
    
    this.renderAuthOptions();
  }

  private getCreateNewUserDTO(): IResetPassword {
    this.resetPassword = {
      email: this.passwordReset.get('email')?.value ?? '',
    };
    return this.resetPassword;
  }

  private handleError(error: string): void {
    console.log(error);
  }

  public renderAuthOptions(): void {
    this._router.navigate(['authenticate', 'auth-options']);
  }
}
