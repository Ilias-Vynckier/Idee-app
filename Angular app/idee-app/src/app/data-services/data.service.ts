import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

import { idee } from '../idee-material-design/idee';
import { Idee } from '../state/idee.model';

//const BASE_URL = '  https://api.kanye.rest';
const BASE_URL =
  '  https://data.mongodb-api.com/app/data-lavpm/endpoint/data/beta/action/find0ne';

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append(
  'api-key',
  `n1OHxhD4DyTmpny5XTX8Rg3xsCoQ6979TPAoupR466bDkFsAzTnqKEN6pfu7V7r2`
);

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

  options = new HttpHeaders()
    .set(
      'api-key',
      `n1OHxhD4DyTmpny5XTX8Rg3xsCoQ6979TPAoupR466bDkFsAzTnqKEN6pfu7V7r2`
    )
    .set('Content-Type', 'application/json');



  create(Idee: idee): Observable<idee> {
    console.log(Idee);
    return this.http.post<idee>(`${this.endpoint}/ideeitems`, Idee);
  }

  loadAll(): Observable<Idee> {
    return from(
      fetch(`${BASE_URL}`,{
        body:{
          "collection": "Idea",
          "database": "IdeeDB",
          "dataSource": "Cluster0"}
      }).then((response) => response.json())
    );
  }
}
