import { Tournament } from './../../models/tournament.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  @Input() tournament: Tournament;

  constructor() { }

  ngOnInit(): void {}

}
