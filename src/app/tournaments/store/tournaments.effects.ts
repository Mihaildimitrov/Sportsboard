import { selectTournamentsArray } from './tournaments.selector';
import { Tournament } from './../models/tournament.model';
import { getTournament, getTournaments, getTournamentsSuccess, getTournamentsFailure, getTournamentSuccess } from './tournaments.actions';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { IAppState } from './../../store/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, from } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError, exhaustMap } from 'rxjs/operators';


@Injectable()
export class TournamentsEffects {
  tournamentsUrl = `${environment.apiUrl}tournaments.json`;

  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private http: HttpClient
  ) {}

  getTournaments$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(getTournaments),
      exhaustMap(() => 
      from(this.http.get<Tournament[]>(this.tournamentsUrl)).pipe(
          map(tournaments => getTournamentsSuccess({ tournaments: tournaments })),
          catchError(error => of(getTournamentsFailure({ error })))
        )
      )
    )
  );

  getTournament$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(getTournament),
      map(action => action.id),
      withLatestFrom(this.store.pipe(select(selectTournamentsArray))),
      switchMap(([id, tournaments]) => {
        const selectedTournament = tournaments.filter(tournament => Number(tournament.id) === Number(id))[0];
        return of(getTournamentSuccess({ tournament: selectedTournament }));
      })
    )
  );

}