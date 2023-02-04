import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RestAPIChoicesService } from 'src/app/services/restapichoices.service';
import { Choice } from 'src/app/classes/choice';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { AddChoiceDialogComponent } from '../addchoicedialog/addchoicedialog.component';

@Component({
  selector: 'app-choicelistdialog',
  templateUrl: './choicelistdialog.component.html',
  styleUrls: ['./choicelistdialog.component.css']
})
export class ChoiceListDialogComponent implements OnInit {

  displayedColumns: string[] = ['option', 'actions'];
  choices: Choice[];
  
  dataSource: ChoicesDataSource;

  constructor(
    private dialogRef: MatDialogRef<ChoiceListDialogComponent>,
    private _restAPIChoiceService: RestAPIChoicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._restAPIChoiceService.getChoices().subscribe(data => {
      // this.dataSource = data;
      this.dataSource = new ChoicesDataSource(data);
      this.choices = data;
    })
  }

  onUpdate(choice: Choice) {
    this.dialog.open(AddChoiceDialogComponent, {
      data: {
        header: 'Update Food Option',
        choice: choice,
        submitBtnTxt: 'Update'
      },
      width: '500px'
    });
  }

  onDelete(id: number) {
    this._restAPIChoiceService.deleteChoice(id)
      .subscribe(
        res => {
          let index = this.choices.map(item => item.id).indexOf(id);
          this.choices.splice(index, 1);

          this.dataSource.setData(this.choices);
        })
  }

}

class ChoicesDataSource extends DataSource<Choice> {
  private _dataStream = new ReplaySubject<Choice[]>();

  constructor(initialData: Choice[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Choice[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Choice[]) {
    this._dataStream.next(data);
  }
}