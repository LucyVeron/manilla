import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-name-dialog',
  templateUrl: './change-name-dialog.component.html',
  styleUrls: ['./change-name-dialog.component.scss']
})
export class ChangeNameDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
