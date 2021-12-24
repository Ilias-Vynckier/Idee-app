import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/data-services/data.service';
import { AppState } from 'src/app/state/app.state';
import { ideeActions } from 'src/app/state/idee.actions';
import { MenuActions } from 'src/app/state/menu.actions';
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
  @Output() ideeClick = new EventEmitter<idee>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  ngOnDestroy() {}

  ideeFetch(click: MouseEvent) {
    this.store.dispatch(ideeActions.loadIdees());
    this.store.dispatch(MenuActions.hideMenu())

    this.ideeClick.emit(this.content);
  }
}
