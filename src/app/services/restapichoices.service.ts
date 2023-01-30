import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Choice } from '../classes/choice';

@Injectable({
  providedIn: 'root'
})
export class RestAPIChoicesService {

  constructor(private http: HttpClient) { }

  getChoices(id?: number): Observable<any> {
    return this.http.get('http://localhost:3000/api/choices/' + id);
  }

  createChoice(choice: Choice): Observable<any> {
    return this.http.post('http://localhost:3000/api/choices/', choice);
  }

  updateChoice(choice: Choice): Observable<any> {
    return this.http.put('http://localhost:3000/api/choices/', choice);
  }

  deleteChoice(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/api/choices/' + id);
  }
}
