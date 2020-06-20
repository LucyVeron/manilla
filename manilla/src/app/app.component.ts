import { Component, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

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
  constructor() { }

  addItem(type: string) {
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

}
