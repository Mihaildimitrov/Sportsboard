import { IAppState } from './../../../store/app.state';
import { selectProfileList } from './../../store/profiles.selector';
import { GetProfiles } from './../../store/profiles.actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles-view',
  templateUrl: './profiles-view.component.html',
  styleUrls: ['./profiles-view.component.scss']
})
export class ProfilesViewComponent implements OnInit {

  profiles$ = this.store.pipe(select(selectProfileList));

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new GetProfiles());
  }

  navigateToProfile(id: number) {
    this.router.navigate(['profile', id]);
  }

}
