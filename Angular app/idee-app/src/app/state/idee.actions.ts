import { createAction, props } from '@ngrx/store';
import { Idee } from './idee.model';

export const loadIdees = createAction('[idee] Load');

export const loadIdeeFail = createAction(
  '[idee] Load Fail',
  props<{ error: Error }>()
);

export const loadIdeeSucces = createAction(
  '[idee] Load Succes',
  props<{ idees: Idee}>()
);

export const ideeActions = {
  loadIdees: loadIdees,
  loadIdeeFail: loadIdeeFail,
  loadIdeeSucces: loadIdeeSucces,
};
