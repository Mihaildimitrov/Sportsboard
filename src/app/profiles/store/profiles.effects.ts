import { GetProfile, ProfilesActionsTypes, GetProfileSuccess, GetProfiles, GetProfilesSuccess } from './profiles.actions';
import { IAppState } from './../../store/app.state';
import { selectProfileList } from './profiles.selector';
import { ProfilesService, ProfileHttp } from './../../profiles/services/profiles.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';


@Injectable()
export class ProfilesEffects {

  constructor(
    private profilesService: ProfilesService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  GetProfile$ = this.actions$.pipe(
    ofType<GetProfile>(ProfilesActionsTypes.GetProfile),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectProfileList))),
    switchMap(([id, profiles]) => {
      const selectedProfile = profiles.filter(profile => Number(profile.id) === Number(id))[0];
      return of(new GetProfileSuccess(selectedProfile));
    })
  );

  @Effect()
  GetProfiles$ = this.actions$.pipe(
    ofType<GetProfiles>(ProfilesActionsTypes.GetProfiles),
    switchMap(() => this.profilesService.GetProfiles()),
    switchMap((profileHttp: ProfileHttp) => of(new GetProfilesSuccess(profileHttp.profiles)))
  );

}
