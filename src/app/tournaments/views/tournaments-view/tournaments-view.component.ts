import { TournamentsService } from './../../services/tournaments.service';
import { IAppState } from './../../../store/app.state';
import { selectTournamentsArray } from './../../store/tournaments.selector';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-view',
  templateUrl: './tournaments-view.component.html',
  styleUrls: ['./tournaments-view.component.scss']
})
export class TournamentsViewComponent implements OnInit {

  tournaments$ = this.store.pipe(select(selectTournamentsArray));

  constructor(private store: Store<IAppState>, private tournamentsService: TournamentsService, private router: Router) { }

  ngOnInit(): void {
    this.tournamentsService.getTournaments();
  }

  navigateToTournament(id: string) {
    this.router.navigate(['tournament', id]);
  }

}
