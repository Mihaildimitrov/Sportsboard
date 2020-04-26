import { Profile } from './../../models/profile.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  @Input() profiles: Profile[];
  @Output() profileSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigateToProfile(id: string) {
    this.profileSelected.emit(id);
  }

}
