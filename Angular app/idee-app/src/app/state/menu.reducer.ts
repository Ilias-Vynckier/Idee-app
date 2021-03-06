import { createReducer, on } from "@ngrx/store";
import { hideMenu, showMenu, toggleMenu } from "./menu.actions";
import { MenuState } from "./menu.state";

export const initialMenuState: MenuState={
  hidden:true,
}

export const menuReducer = createReducer(
  initialMenuState,
  on(showMenu,(state)=>({...state,hidden:false})),
  on(hideMenu,(state)=>({...state,hidden:true})),
  on(toggleMenu,(state)=>({...state,hidden:true}))
)
