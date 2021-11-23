import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';

@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css']
})
export class IdeeTextBoxComponent implements OnInit {

  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
