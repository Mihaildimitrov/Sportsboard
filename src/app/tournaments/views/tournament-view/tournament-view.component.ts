import { IAppState } from './../../../store/app.state';
import { selectSelectedTournament } from './../../store/tournaments.selector';
import { GetTournament } from './../../store/tournaments.actions';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-view',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.scss']
})
export class TournamentViewComponent implements OnInit {

  tournament$ = this.store.pipe(select(selectSelectedTournament));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetTournament(this.route.snapshot.params.id));
  }

}
