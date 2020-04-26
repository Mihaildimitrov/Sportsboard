import { IAppState } from './../../../store/app.state';
import { selectPlayersArray } from './../../store/players.selector';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.scss']
})
export class PlayersViewComponent implements OnInit {

  players$ = this.store.pipe(select(selectPlayersArray));

  constructor(private store: Store<IAppState>, private playersService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers();
  }

  navigateToPlayer(id: number) {
    this.router.navigate(['player', id]);
  }

}
