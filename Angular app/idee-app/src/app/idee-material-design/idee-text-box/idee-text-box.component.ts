import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { idee } from '../idee';
import { DataService } from 'src/app/data-services/data.service';

@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css'],
})
export class IdeeTextBoxComponent implements OnInit {
  message!: string;
  subscription!: Subscription;
  idee$: Observable<idee>;
  content!: 'test';

  constructor(private data: DataService) {
    this.idee$ = this.data.changeMessage();
    console.log(this.data.changeMessage());
  }

  ngOnInit() {
    this.subscription = this.idee$.subscribe()
   /*fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data =>  this.data.changeMessage());*/
    this.idee$ = this.data.changeMessage();
    console.log(this.data.changeMessage());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
