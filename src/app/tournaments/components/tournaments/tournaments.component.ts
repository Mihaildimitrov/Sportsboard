import { Tournament } from './../../models/tournament.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  @Input() tournaments: Tournament[];
  @Output() tournamentSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  navigateToTournament(id: string) {
    this.tournamentSelected.emit(id);
  }

}
