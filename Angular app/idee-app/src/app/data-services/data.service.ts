import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { idee } from '../idee-material-design/idee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /*private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();*/

  private endpoint = 'https://localhost:7272';

  constructor(private http: HttpClient) {}


  changeMessage():Observable<idee> {
    console.log("dink")
    return this.http.get<idee>(`${this.endpoint}/ideeitems`);
  }
}


