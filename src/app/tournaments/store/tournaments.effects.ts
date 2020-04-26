import { IAppState } from './../../store/app.state';
import { selectTournamentsList } from './tournaments.selector';
import { TournamentsActionsTypes, GetTournament, GetTournaments, GetTournamentsSuccess, GetTournamentSuccess } from './tournaments.actions';
import { TournamentsService, TournamentHttp } from './../services/tournaments.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class TournamentsEffects {

  constructor(
    private tournamentsService: TournamentsService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getTournament$ = this.actions$.pipe(
    ofType<GetTournament>(TournamentsActionsTypes.GetTournament),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectTournamentsList))),
    switchMap(([id, tournaments]) => {
      const selectedTournament = tournaments.filter(tournament => Number(tournament.id) === Number(id))[0];
      return of(new GetTournamentSuccess(selectedTournament));
    })
  );

  @Effect()
  getProfiles$ = this.actions$.pipe(
    ofType<GetTournaments>(TournamentsActionsTypes.GetTournaments),
    switchMap(() => this.tournamentsService.GetTournaments()),
    switchMap((tournamentHttp: TournamentHttp) => of(new GetTournamentsSuccess(tournamentHttp.tournaments)))
  );

}
