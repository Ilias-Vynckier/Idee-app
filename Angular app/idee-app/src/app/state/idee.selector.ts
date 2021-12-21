import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeeState } from './idee.state';

export const selectIdee = createFeatureSelector<IdeeState>('idee');

export const selectIdeeIdees = createSelector(
  selectIdee,
  (state: IdeeState) => state.idees
);

export const selectIdeeLoading = createSelector(
  selectIdee,
  (state: IdeeState) => state.loading
);

export const selectIdeeError = createSelector(
  selectIdee,
  (state: IdeeState) => state.error
);
