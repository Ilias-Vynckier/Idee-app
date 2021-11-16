import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';

@Component({
  selector: 'idee-text-button',
  templateUrl: './idee-text-button.component.html',
  styleUrls: ['./idee-text-button.component.css']
})
export class IdeeTextButtonComponent implements OnInit {

  subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    //this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ideeFetch(){
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => this.subscription = this.data.currentMessage.subscribe(message => data = message));
  }
}


