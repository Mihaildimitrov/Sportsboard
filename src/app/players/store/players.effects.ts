import { Player } from './../models/player.model';
import { getPlayers, getPlayersSuccess, getPlayersFailure, getPlayer, getPlayerSuccess } from './players.actions';
import { selectPlayersArray } from './players.selector';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { IAppState } from '../../store/app.state';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, from } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError, exhaustMap } from 'rxjs/operators';


@Injectable()
export class PlayersEffects {
  playersUrl = `${environment.apiUrl}players.json`;

  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private http: HttpClient
  ) {}


  getPlayers$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(getPlayers),
      exhaustMap(() => 
      from(this.http.get<Player[]>(this.playersUrl)).pipe(
          map(players => getPlayersSuccess({ players: players })),
          catchError(error => of(getPlayersFailure({ error })))
        )
      )
    )
  );

  getPlayer$ = createEffect(() =>
  this.actions$.pipe( 
    ofType(getPlayer),
    map(action => action.id),
    withLatestFrom(this.store.pipe(select(selectPlayersArray))),
    switchMap(([id, players]) => {
      const selectedPlayer = players.filter(player => Number(player.id) === Number(id))[0];
      return of(getPlayerSuccess({ player: selectedPlayer }));
    })
  )
);


}