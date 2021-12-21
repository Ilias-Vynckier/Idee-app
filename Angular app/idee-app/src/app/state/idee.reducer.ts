import { createReducer, on } from '@ngrx/store';
import { loadIdee, loadIdeeFail, loadIdeeSucces } from './idee.actions';
import { IdeeState } from './idee.state';

export const initialIdeeState: IdeeState = {
  error: null,
  loading: false,
  idees:[],
};

export const ideeReducer = createReducer(
  initialIdeeState,
  on(loadIdee, (state) => ({ ...state, loading: true })),
  on(loadIdeeFail, (state, { error }) => ({ ...state, error: error })),
  on(loadIdeeSucces, (state, { resorts }) => ({
    ...state,
    error: null,
    loading: false,
    Idee: resorts,
  }))
);
