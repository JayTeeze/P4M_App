import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choice } from '../classes/choice';

@Injectable({
  providedIn: 'root'
})
export class RestAPIChoicesService {

  constructor(private http: HttpClient) { }

  getChoices(id: number) {
    return this.http.get('http://localhost:3000/api/choices/' + id);
  }

  createChoice(choice: Choice) {
    return this.http.post('http://localhost:3000/api/choices/', choice);
  }

  updateChoice(choice: Choice) {
    return this.http.put('http://localhost:3000/api/choices/', choice);
  }

  deleteChoice(id: number) {
    return this.http.delete('http://localhost:3000/api/choices/' + id);
  }
}
