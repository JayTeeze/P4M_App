import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddChoiceDialogComponent } from './choices/addchoicedialog/addchoicedialog.component';
import { ChoiceListDialogComponent } from './choices/choicelistdialog/choicelistdialog.component';
import { RestAPIPickerService } from './services/restapipicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P4M_App';
  pick: string = 'Indecisive?';

  constructor(
    private _restAPIPickerService: RestAPIPickerService,
    private dialog: MatDialog) {}

  onPick() {
    this._restAPIPickerService.getPick().subscribe(pick => {
      this.pick = pick.name;
    })
  }

  onOpenChoiceList() {
    this.dialog.open(ChoiceListDialogComponent, {
      width: '500px',
      height: '400px'
    })
  }

  onAddChoice() {
    this.dialog.open(AddChoiceDialogComponent, {
      width: '500px'
    });
  }
}
