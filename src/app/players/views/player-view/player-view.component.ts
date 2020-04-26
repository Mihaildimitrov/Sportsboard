import { IAppState } from './../../../store/app.state';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectPlayer } from '../../store/players.selector';
import { ActivatedRoute } from '@angular/router';
import { getPlayer } from '../../store/players.actions';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.scss']
})
export class PlayerViewComponent implements OnInit {

  player$ = this.store.pipe(select(selectPlayer));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPlayer({ id: this.route.snapshot.params.id }));
  }

}
