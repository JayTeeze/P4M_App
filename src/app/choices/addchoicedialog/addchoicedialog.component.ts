import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Choice } from 'src/app/classes/choice';
import { RestAPIChoicesService } from 'src/app/services/restapichoices.service';

@Component({
  selector: 'app-addchoicedialog',
  templateUrl: './addchoicedialog.component.html',
  styleUrls: ['./addchoicedialog.component.css']
})
export class AddChoiceDialogComponent {

  choice: string;

  constructor(
    private dialogRef: MatDialogRef<AddChoiceDialogComponent>,
    private _restAPIChoiceService: RestAPIChoicesService) {}

  onAdd() {
    if (this.choice) {
      const newChoice = new Choice;
      newChoice.name = this.choice;
  
      this._restAPIChoiceService.createChoice(newChoice).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
      })
    }
  }

}
