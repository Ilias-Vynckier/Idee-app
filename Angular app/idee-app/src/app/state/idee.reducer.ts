import { createReducer, on } from '@ngrx/store';
import { loadIdees, loadIdeeFail, loadIdeeSucces } from './idee.actions';
import { IdeeState } from './idee.state';

export const initialIdeeState: IdeeState = {
  error: null,
  loading: false,
  idees:{quote:"test",idee:"test"}, // aangepast
};

export const ideeReducer = createReducer(
  initialIdeeState,
  on(loadIdees, (state) => ({ ...state, loading: true })),
  on(loadIdeeFail, (state, { error }) => ({ ...state, error: error })),
  on(loadIdeeSucces, (state, { idees }) => ({
    ...state,
    error: null,
    loading: false,
    idees: idees,
  }))
);

