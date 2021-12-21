
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

import { idee } from '../idee-material-design/idee';
import { Idee } from '../state/idee.model';


const BASE_URL = '  https://api.kanye.rest';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();
  //private endpoint = 'https://localhost:7169';
  //private endpoint = 'https://data.mongodb-api.com/app/data-lavpm/endpoint/data/beta';
  private endpoint = 'https://api.kanye.rest';

  constructor(private http: HttpClient) {}


 /* changeMessage(): Observable<idee> {
    //return this.http.get<idee>(`${this.endpoint}/ideeitems`);
    /*var test: Observable<any> = this.http.get(`${this.endpoint}/ideeitems`);
    test.subscribe({
      next: (data) => console.log(data),
      error: () => ({}) /** Error handling callback */ //,
    //complete: () => ({}) /** Done with the observable ,
    //});
    /*return test;*/
    //return this.http.get<idee>(`${this.endpoint}/ideeitems`);
/*
    this.messageSource.next(this.http.get<idee>(`${this.endpoint}`));
    return this.http.get<idee>(`${this.endpoint}`);
  }*/

  create(Idee: idee): Observable<idee> {
    console.log(Idee);
    return this.http.post<idee>(`${this.endpoint}/ideeitems`, Idee);
  }

  loadAll(): Observable<Array<Idee>> {
 console.log(fetch(`${BASE_URL}`).then((response) =>  response.json()))
    return from(
      fetch(`${BASE_URL}`).then((response) =>  response.json())
    );
  }
}
