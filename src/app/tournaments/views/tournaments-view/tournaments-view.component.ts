import { IAppState } from './../../../store/app.state';
import { GetTournaments } from './../../store/tournaments.actions';
import { selectTournamentsList } from './../../store/tournaments.selector';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-view',
  templateUrl: './tournaments-view.component.html',
  styleUrls: ['./tournaments-view.component.scss']
})
export class TournamentsViewComponent implements OnInit {

  tournaments$ = this.store.pipe(select(selectTournamentsList));

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTournaments());
  }

  navigateToTournament(id: string) {
    this.router.navigate(['tournament', id]);
  }

}
