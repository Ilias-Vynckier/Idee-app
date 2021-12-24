import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { MenuActions } from './state/menu.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'idee-app';

  constructor(private store: Store<AppState>) {}

  /*hidemenu(){
    this.store.dispatch(MenuActions.hideMenu())
  }*/
}
