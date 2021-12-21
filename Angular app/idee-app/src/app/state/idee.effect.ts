
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from '../data-services/data.service';
import { IdeeActions } from './idee.actions';

@Injectable()
export class IdeeEffects {
  loadIdee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(IdeeActions.loadIdee),
      mergeMap(() =>
        this.DataService.loadAll().pipe(
          map((resorts) => IdeeActions.loadIdeeSucces({ resorts })),
          catchError((error) => of(IdeeActions.loadIdeeFail({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private DataService: DataService
  ) {}
}
