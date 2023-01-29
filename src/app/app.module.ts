import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RestAPIPickerService } from './services/restapipicker.service';
import { RestAPIChoicesService } from './services/restapichoices.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AddChoiceDialogComponent } from './choices/addchoicedialog/addchoicedialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddChoiceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    RestAPIPickerService,
    RestAPIChoicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
