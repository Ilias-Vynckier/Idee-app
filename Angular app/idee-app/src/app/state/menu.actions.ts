import { createAction } from '@ngrx/store';

export const hideMenu = createAction('[menu] Hide');

export const showMenu = createAction('[menu] Show');
export const toggleMenu = createAction('[menu] Toggle');

export const MenuActions = {
  hideMenu: hideMenu,
  showMenu: showMenu,
  toggleMenu:toggleMenu,
};
