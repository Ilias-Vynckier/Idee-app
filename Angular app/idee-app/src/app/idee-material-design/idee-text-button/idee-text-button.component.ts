import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';
import { idee } from '../idee';


@Component({
  selector: 'idee-text-button',
  templateUrl: './idee-text-button.component.html',
  styleUrls: ['./idee-text-button.component.css']
})
export class IdeeTextButtonComponent implements OnInit {

  subscription!: Subscription;
  idee$!: Observable<idee>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.idee$ = this.data.changeMessage()

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*ideeFetch(){
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data =>  this.data.changeMessage(data.quote));
  }*/
  ideeFetch( ){
    this.idee$= this.data.changeMessage()
   
  }
}


