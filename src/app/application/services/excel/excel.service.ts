import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  public generateExcelFile<T>(data: T[], fileName: string): Observable<void> {
    return new Observable<void>((observer) => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      const excelData: any = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' });
      const blob = new Blob([this.s2ab(excelData)], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      const link: HTMLAnchorElement = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName ?? 'excel-file.xlsx';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      observer.next();
      observer.complete();
    });
  }

  private s2ab(s: string): ArrayBuffer {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
}
