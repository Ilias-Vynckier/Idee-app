import { IdeeState } from "./idee.state";
import { MenuState } from "./menu.state";

export interface AppState{
  menu:MenuState
  idee:IdeeState
}
