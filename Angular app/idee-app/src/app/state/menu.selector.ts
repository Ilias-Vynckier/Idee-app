import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState } from './menu.state';


export const selectMenu = createFeatureSelector<MenuState>('sidenav');

export const selectMenuHidden = createSelector(
  selectMenu,
  (state: MenuState) => state.hidden
);
