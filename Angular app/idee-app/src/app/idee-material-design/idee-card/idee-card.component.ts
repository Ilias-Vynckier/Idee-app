import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectIdeeIdees } from 'src/app/state/idee.selector';
import { MenuActions } from 'src/app/state/menu.actions';

@Component({
  selector: 'idee-card',
  templateUrl: './idee-card.component.html',
  styleUrls: ['./idee-card.component.css'],
})
export class IdeeCardComponent implements OnInit {
  ngOnInit(): void {}

  idee$ = this.store.select(selectIdeeIdees);
  constructor(private store: Store<AppState>) {}

  hidemenu() {
    this.store.dispatch(MenuActions.hideMenu());
  }

  NAIDEE(test: any) {
    console.log(test);
  }
}
