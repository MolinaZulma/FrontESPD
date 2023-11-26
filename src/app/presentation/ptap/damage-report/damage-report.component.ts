import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { ExcelService } from 'src/app/application/services/excel/excel.service';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { DamageQueryService } from 'src/app/application/features/damageReport/query/damage-query.service';
import { HttpMediator, HttpMediatorCallbacks, CommandParamsNoPayload, } from 'src/app/application/meadiator/HttpMediator';

@Component({
  selector: 'app-damage-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './damage-report.component.html',
  styleUrl: './damage-report.component.css',
})
export class DamageReportComponent implements OnInit {
  public ICreateWaterControlDTO!: FormGroup;
  public errorMessage!: string | null;
  public showModal: boolean = false;
  public selectedActivity: IListDamageDTO | null = null;
  public iListDamageDTO!: IListDamageDTO[];

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _httpMediator: HttpMediator,
    private readonly _excelService: ExcelService
  ) {}

  public ngOnInit(): void {
    this.getListDamageDTO();
  }

  private getListDamageDTO(): void {
    const callbacks: HttpMediatorCallbacks<ISerialize<IListDamageDTO>> = {
      success: this.setList.bind(this),
      error: this.handleError.bind(this),
    };
    const params: CommandParamsNoPayload<ISerialize<IListDamageDTO>> = {
      commandClass: DamageQueryService,
      method: DamageQueryService.prototype.getListDamageReport,
      callbacks,
    };
    this._httpMediator.execNoPayload(params);
  }

  public handleError(): void {}

  public goHome(): void {
    this._router.navigate(['ptap', 'home']);
  }

  public setList(iListDamageDTO: ISerialize<IListDamageDTO>): void {
    console.log(iListDamageDTO);
    
    this.iListDamageDTO = iListDamageDTO.data;
  }

  public openDetailModal(activity: IListDamageDTO): void {
    this.showModal = true;
    this.selectedActivity = activity;
  }

  public closeModal(): void {
    this.showModal = false;
    this.selectedActivity = null;
  }

  public downloadExcel(): void {
    if (this.selectedActivity) {
      this._excelService
        .generateExcelFile([this.selectedActivity], 'test-file')
        .subscribe(() => {
          console.log('Excel file generated and downloaded successfully!');
        });
    }
  }
}
