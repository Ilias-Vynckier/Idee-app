
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from '../data-services/data.service';
import { ideeActions } from './idee.actions';

@Injectable()
export class IdeeEffects {
  loadIdee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ideeActions.loadIdees),
      mergeMap(() =>
        this.DataService.loadAll().pipe(
          map((idees) => ideeActions.loadIdeeSucces({ idees })),
          catchError((error) => of(ideeActions.loadIdeeFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private DataService: DataService
  ) {}
}
