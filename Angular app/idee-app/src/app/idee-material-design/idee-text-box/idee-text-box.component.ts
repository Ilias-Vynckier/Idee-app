import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { idee } from '../idee';
import { DataService } from 'src/app/data-services/data.service';
import { ideeNA } from '../idee-na';

@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css'],
})
export class IdeeTextBoxComponent implements OnInit {

  @Input() content: ideeNA = new ideeNA();

  idee$: Observable<idee>;

  constructor(private ideeApi: DataService) {
    this.idee$ = this.ideeApi.changeMessage();
  }

  ngOnInit() {
    this.ideeApi.currentMessage.subscribe((x) => (this.idee$ = x));
  }

  ngOnDestroy() {}
}
