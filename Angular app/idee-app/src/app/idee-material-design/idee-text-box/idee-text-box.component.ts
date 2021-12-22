import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { idee } from '../idee';
import { DataService } from 'src/app/data-services/data.service';
import { ideeNA } from '../idee-na';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {  selectIdeeIdees } from 'src/app/state/idee.selector';
import { ideeActions } from 'src/app/state/idee.actions';


@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css'],
})
export class IdeeTextBoxComponent implements OnInit {
  @Input() content: ideeNA = new ideeNA();


  idees$ = this.store.select(selectIdeeIdees);

  //idee$: Observable<idee>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.subscribe((state) => {

      console.log(state);
    });

    this.store.dispatch(ideeActions.loadIdees());
  }

  /* constructor(private ideeApi: DataService) {
    this.idee$ = this.ideeApi.changeMessage();
  }*/

  /*ngOnInit() {
    this.ideeApi.currentMessage.subscribe((x) => (this.idee$ = x));
  }*/

  ngOnDestroy() {}
}
