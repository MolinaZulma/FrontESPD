import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateJarDTO } from 'src/app/application/DTO/jarFormat/ICreateJarDTO';
import { IListJarDTO } from 'src/app/application/DTO/jarFormat/IListJarDTO';
import { JarFormatService } from 'src/app/application/features/jarFormat/jar-format.service';
import { JardFormatQueryService } from 'src/app/application/features/jarFormat/query/jard-format-query.service';
import { CommandParamsNoPayload, CommandParamsWithPayload, HttpMediator, HttpMediatorCallbacks } from 'src/app/application/meadiator/HttpMediator';
import { ISerialize } from 'src/app/domain/models/ISerialize.model';

@Component({
  selector: 'app-jard-format',
  templateUrl: './jard-format.component.html',
  styleUrls: ['./jard-format.component.css']
})
export class JardFormatComponent implements OnInit {
  public JardFormat!: FormGroup;
  public errorMessage!: string | null;
  public iListJarDTO!: IListJarDTO[]

  public showModal: boolean = false
  public selectedActivity: IListJarDTO | null = null;


  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator
  ) {}


  public ngOnInit(): void {
    this.initForm();
    this.getIListJardFormat()
  }

  private initForm(): void {
    this.JardFormat = this._formBuilder.group({
      jarConcentration: ['', [Validators.required]],
      jarOptime: ['', [Validators.required]],
      phJar: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    
    this.errorMessage = null;
    const callbacks: HttpMediatorCallbacks<IListJarDTO> = {
      success: this.showCreated.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsWithPayload<ICreateJarDTO, IListJarDTO> = {
      commandClass: JarFormatService,
      method: JarFormatService.prototype.CreateJar,
      data: this.CreateJarDTO(),
      callbacks,
    };
    this._httpMediator.execWithPayload(params);
  }

  public showCreated(iListJarDTO: IListJarDTO): void {
    console.log(iListJarDTO);
    
    this.goHome()
  }

  public handleError(error: any): void {
    console.log(error);
  }

  private CreateJarDTO(): ICreateJarDTO {
    return {
      jarConcentration: this.JardFormat.get('jarConcentration')?.value ?? '',
      jarOptime: this.JardFormat.get('jarOptime')?.value ?? '',
      phJar: this.JardFormat.get('phJar')?.value ?? '',
      nationalIdentificationNumber: JSON.parse(sessionStorage['userInfo']).nationalIdentificationNumber,
      idPlant: 1
    };
  }

  public goHome(): void {
    this._router.navigate(['ptap', 'home'])
  }




















  private getIListJardFormat(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListJarDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListJarDTO>> = {
      commandClass: JardFormatQueryService,
      method: JardFormatQueryService.prototype.getListJardFormat,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }

  public setList(IListJarDTO: ISerialize<IListJarDTO>): void {
    console.log(IListJarDTO);
    
    this.iListJarDTO = IListJarDTO.data;
  }

  public openDetailModal(activity: IListJarDTO): void {
    this.showModal = true
    this.selectedActivity = activity;
  }

  public closeModal(): void {
    this.showModal = false
    this.selectedActivity = null;
  }










}
