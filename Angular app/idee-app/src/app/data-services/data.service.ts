import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import {Observable } from 'rxjs';
import { idee } from '../idee-material-design/idee';
import { ideeNA } from '../idee-material-design/idee-na';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /*private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();*/
  private endpoint = 'http://localhost:5169';
  //private endpoint = 'https://api.kanye.rest';

  constructor(private http:HttpClient) {}

  changeMessage():Observable<idee> {
    //return this.http.get<idee>(`${this.endpoint}/ideeitems`);
    /*var test: Observable<any> = this.http.get(`${this.endpoint}/ideeitems`);
    test.subscribe({
      next: (data) => console.log(data),
      error: () => ({}) /** Error handling callback *///,
      //complete: () => ({}) /** Done with the observable ,
    //});
    /*return test;*/
    return this.http.get<idee>(`${this.endpoint}/ideeitems`);
  }

  create(Idee: idee): Observable<idee> {
    console.log(Idee);
    return this.http.post<idee>(`${this.endpoint}/ideeitems`, Idee);
  }
}


