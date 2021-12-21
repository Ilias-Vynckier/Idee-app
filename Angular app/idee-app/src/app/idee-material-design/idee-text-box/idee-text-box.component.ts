import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { idee } from '../idee';
import { DataService } from 'src/app/data-services/data.service';
import { ideeNA } from '../idee-na';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectIdee, selectIdeeIdees } from 'src/app/state/idee.selector';
import { IdeeActions } from 'src/app/state/idee.actions';
import { initialIdeeState } from 'src/app/state/idee.reducer';
import { selectMenu } from 'src/app/state/menu.selector';
import { initialMenuState } from 'src/app/state/menu.reducer';

@Component({
  selector: 'idee-text-box',
  templateUrl: './idee-text-box.component.html',
  styleUrls: ['./idee-text-box.component.css'],
})
export class IdeeTextBoxComponent implements OnInit {
  @Input() content: ideeNA = new ideeNA();


  idee$ = this.store.select(selectIdeeIdees);


  //idee$: Observable<idee>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.subscribe((state) => {

      console.log(state);
    });

    this.store.dispatch(IdeeActions.loadIdee());
  }

  /* constructor(private ideeApi: DataService) {
    this.idee$ = this.ideeApi.changeMessage();
  }*/

  /*ngOnInit() {
    this.ideeApi.currentMessage.subscribe((x) => (this.idee$ = x));
  }*/

  ngOnDestroy() {}
}
