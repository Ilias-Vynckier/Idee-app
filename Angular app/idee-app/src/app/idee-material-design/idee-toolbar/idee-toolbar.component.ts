import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ideeActions } from 'src/app/state/idee.actions';
import { MenuActions } from 'src/app/state/menu.actions';

@Component({
  selector: 'idee-toolbar',
  templateUrl: './idee-toolbar.component.html',
  styleUrls: ['./idee-toolbar.component.css']
})
export class IdeeToolbarComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {

      //console.log(state);
    });
  }

  toggleMenu(){
    this.store.dispatch(MenuActions.toggleMenu())
  }
}
