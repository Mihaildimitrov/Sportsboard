import { Component, OnInit } from '@angular/core';
import { SportCentersService } from '../../services/sport-centers.service';
import { SportCenter } from '../../models/sport-center.model';

@Component({
  selector: 'app-sport-centers-search',
  templateUrl: './sport-centers-search.component.html',
  styleUrls: ['./sport-centers-search.component.scss']
})
export class SportCentersSearchComponent implements OnInit {

  searchTerm: string;
  sportCentersResult: Array<SportCenter>;

  constructor(private sportCentersService: SportCentersService) {
    this.sportCentersService.sportCentersResult$.subscribe(centers => this.sportCentersResult = centers);
  }

  ngOnInit(): void {
  }

  search(event: Event) {
    event.preventDefault();
    this.sportCentersService.findSportCenter(this.searchTerm);
    this.searchTerm = "";
  }
}
