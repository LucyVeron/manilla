import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { ChangeNameDialogComponent } from './change-name-dialog/change-name-dialog.component';

export interface Item {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  public items: Item[] = [];
  public changeNameDialogRef: MatDialogRef<ChangeNameDialogComponent>;

  constructor(public dialog: MatDialog) { }

  public addItem(type: string) {
    switch (type) {
      case 'file':
        this.items.push({
          icon: 'insert_drive_file',
          name: 'new_file'
        });
        break;
      case 'folder':
        this.items.push({
          icon: 'folder',
          name: 'new_folder'
        });
        break;
      default:
        break;
    }
  }

  public editNameDialog(target: Item) {
    const dialogRef = this.changeNameDialogRef = this.dialog.open(ChangeNameDialogComponent, {
      data: target
    });
  }

  public deleteItem(event: any) {
    this.items.splice(event.item.index, 1);
  }

}
