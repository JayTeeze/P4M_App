import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RestAPIChoicesService } from 'src/app/services/restapichoices.service';
import { Choice } from 'src/app/classes/choice';

@Component({
  selector: 'app-choicelistdialog',
  templateUrl: './choicelistdialog.component.html',
  styleUrls: ['./choicelistdialog.component.css']
})
export class ChoiceListDialogComponent implements OnInit {

  displayedColumns: string[] = ['option', 'actions'];
  dataSource: Choice[];

  constructor(
    private dialogRef: MatDialogRef<ChoiceListDialogComponent>,
    private _restAPIChoiceService: RestAPIChoicesService
  ) {}

  ngOnInit(): void {
    this._restAPIChoiceService.getChoices().subscribe(data => {
      this.dataSource = data;
      console.log(data);
    })
  }

  onUpdate() {}

  onDelete() {}

}
