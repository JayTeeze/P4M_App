import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Choice } from 'src/app/classes/choice';
import { RestAPIChoicesService } from 'src/app/services/restapichoices.service';

@Component({
  selector: 'app-addchoicedialog',
  templateUrl: './addchoicedialog.component.html',
  styleUrls: ['./addchoicedialog.component.css']
})
export class AddChoiceDialogComponent {

  name: string;
  isNew: boolean;

  header: string;
  choice: Choice;
  submitBtnTxt: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddChoiceDialogComponent>,
    private _restAPIChoiceService: RestAPIChoicesService) {
      this.header = data.header || this.header;
      this.submitBtnTxt = data.submitBtnTxt || this.submitBtnTxt;
      this.choice = data.choice || this.choice;
      this.isNew = data.choice ? false : true;

      if (data.choice) {
        this.name = data.choice.name || this.name;
      }
    }

  addChoice() {
    if (this.name) {
      const newChoice = new Choice;
      newChoice.name = this.name;
  
      this._restAPIChoiceService.createChoice(newChoice).subscribe(res => {
        this.dialogRef.close();
      })
    }
  }

  updateChoice() {
    if (this.name) {
      this.choice.name = this.name;

      this._restAPIChoiceService.updateChoice(this.choice).subscribe(res => {
        this.dialogRef.close();
      })
    }
  }

  onSubmit() {
    if (this.isNew) {
      this.addChoice();
    } else {
      this.updateChoice();
    }
  }

}
