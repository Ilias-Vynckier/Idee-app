
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

  create(Idee: idee): Observable<idee> {
    console.log(Idee);
    return this.http.post<idee>(`${this.endpoint}/ideeitems`, Idee);
  }

  loadAll(): Observable<Idee> {
    return from(
      fetch(`${BASE_URL}`).then((response) =>  response.json())
    );
  }
}
