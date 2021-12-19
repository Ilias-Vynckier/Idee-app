import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';
import { idee } from '../idee';
import { ideeNA } from '../idee-na';

@Component({
  selector: 'idee-text-button',
  templateUrl: './idee-text-button.component.html',
  styleUrls: ['./idee-text-button.component.css'],
})
export class IdeeTextButtonComponent implements OnInit {
  ideeAPIsub = new Subscription();
  @Input() content: idee = new ideeNA();

  constructor(private data: DataService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  ideeFetch(click: MouseEvent) {


    this.data.changeMessage();

  }
}
