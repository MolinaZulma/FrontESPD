import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { ISerialize } from 'src/app/domain/models/ISerialize.model';
import { ExcelService } from 'src/app/application/services/excel/excel.service';
import { IListDamageDTO } from 'src/app/application/DTO/damageReport/IListDamageDTO';
import { DamageQueryService } from 'src/app/application/features/damageReport/query/damage-query.service';
import { HttpMediator, HttpMediatorCallbacks, CommandParamsNoPayload, } from 'src/app/application/meadiator/HttpMediator';
import { FacadeLocatorService } from 'src/app/application/services/facadeLocator/facade-locator.service';
import { GenericCrudViewComponent } from '../generic-crud-view/generic-crud-view.component';

@Component({
  selector: 'app-damage-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './damage-report.component.html',
  styleUrl: './damage-report.component.css',
})
export class DamageReportComponent extends GenericCrudViewComponent implements OnInit, AfterViewInit {
  public ICreateWaterControlDTO!: FormGroup;
  public errorMessage!: string | null;
  public showModal: boolean = false;
  public selectedActivity: IListDamageDTO | null = null;
  public iListDamageDTO!: IListDamageDTO[];
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  constructor(private readonly _fadeLocatorService: FacadeLocatorService) {
    super(_fadeLocatorService);
  }

  public ngAfterViewInit(): void {}

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

  public downloadPDF(): void {
    const sectionContent = this.getSectionHtml();
    if (sectionContent) {
      const div = document.createElement('div');
      div.innerHTML = sectionContent;
      div.style.cssText = 'width: 207px; height: auto; margin: 2px; padding: 2px;';
      const images = div.querySelectorAll('img');
      images.forEach(img => img.style.cssText = 'width: 90%;');
      const p = div.querySelectorAll('p');
      p.forEach(p => p.style.cssText = 'padding: 2px; font-size: 5px; background-color: #ebebeb; border-radius: 3px;')
      document.body.appendChild(div);
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', });
      pdf.html(div, { callback: () => { document.body.removeChild(div); pdf.save('section-content.pdf'); }, });
    }
  }

  private getSectionHtml(): string {
    const sectionElement = document.querySelector('app-damage-report .modal section');
    return sectionElement?.outerHTML ?? '';
  }
  
}
