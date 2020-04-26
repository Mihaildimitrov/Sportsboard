import { selectSelectedProfile } from './../../store/profiles.selector';
import { GetProfile } from './../../store/profiles.actions';
import { IAppState } from './../../../store/app.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  profile$ = this.store.pipe(select(selectSelectedProfile));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetProfile(this.route.snapshot.params.id));
  }

}
