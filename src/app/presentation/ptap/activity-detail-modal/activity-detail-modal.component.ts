import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-detail-modal',
  templateUrl: './activity-detail-modal.component.html',
  styleUrls: ['./activity-detail-modal.component.css']
})
export class ActivityDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ActivityDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
