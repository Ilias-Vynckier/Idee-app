import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { idee } from '../idee';
import { DataService } from 'src/app/data-services/data.service';
import { ideeNA } from '../idee-na';

@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css'],
})
export class IdeeTextBoxComponent implements OnInit {


  idee$: Observable<idee>;

  constructor(private ideeApi: DataService) {
    this.idee$ = this.ideeApi.changeMessage();
    console.log("di",this.ideeApi.changeMessage());
  }

  ngOnInit() {
  }

  ngOnDestroy() {}
}
