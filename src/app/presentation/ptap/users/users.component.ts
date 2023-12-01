import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCrudViewComponent } from '../generic-crud-view/generic-crud-view.component';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { CommandParamsNoPayload, HttpMediatorCallbacks } from 'src/app/application/meadiator/HttpMediator';
import { UserQueryService } from 'src/app/application/features/user/query/user-query.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent extends GenericCrudViewComponent implements OnInit {
  public errorMessage!: string | null;
  public showModal: boolean = false
  public selectedActivity: IListUsersDTO | null = null;

  public IListUsersDTO!: IListUsersDTO[]


  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
  }

  public ngOnInit(): void {
    this.getIListActivityDTO()
  }

  private getIListActivityDTO(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListUsersDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListUsersDTO>> = {
      commandClass: UserQueryService,
      method: UserQueryService.prototype.getAllUsers,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }

  public handleError(error: any): void {
    console.log(error);
  }

  public setList(IListUsersDTO: ISerialize<IListUsersDTO>): void {
    console.log( this.IListUsersDTO);
    
    this.IListUsersDTO = IListUsersDTO.data;
  }

  
  public openDetailModal(activity: IListUsersDTO): void {
    this.showModal = true
    this.selectedActivity = activity;
  }

  public downloadExcel(): void {
    if (this.selectedActivity) {
      this._excelService.generateExcelFile([this.selectedActivity], 'test-file').subscribe(() => {
        console.log('Excel file generated and downloaded successfully!');
      });
    }
  }

  
  public closeModal(): void {
    this.showModal = false
    this.selectedActivity = null;
  }


}




export interface IListUsersDTO {
  id:                           string;
  nationalIdentificationNumber: string;
  email:                        string;
  fullName:                     string;
  phoneNumber:                  string;
}
