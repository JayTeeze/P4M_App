import { Component } from '@angular/core';
import { Pick } from './classes/pick';
import { RestAPIPickerService } from './services/restapipicker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P4M_App';
  pick: Pick;

  constructor(private _restAPIPickerService: RestAPIPickerService) {}

  onPick() {
    this._restAPIPickerService.getPick().subscribe(pick => {
      this.pick = pick;
      console.log(this.pick);
    })
  }
}
