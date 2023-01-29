import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddChoiceDialogComponent } from './choices/addchoicedialog/addchoicedialog.component';
import { Pick } from './classes/pick';
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
      console.log(this.pick);
    })
  }

  onAddChoice() {
    this.dialog.open(AddChoiceDialogComponent, {
      width: '500px'
    });
  }
}
