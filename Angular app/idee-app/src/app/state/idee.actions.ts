import { createAction, props } from "@ngrx/store";
import { Idee } from "./idee.model";


export const loadIdee=createAction(
  '[idee] Load',
);

export const loadIdeeFail=createAction(
  '[idee] Load Fail',
  props<{error:Error}>()
);

export const loadIdeeSucces=createAction(
  '[idee] Load Succes',
  props<{resorts:Idee[]}>()
);


export const IdeeActions={
 loadIdee:loadIdee,
 loadIdeeFail:loadIdeeFail,
 loadIdeeSucces:loadIdeeSucces,
}
