import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsViewComponent } from './tournaments-view.component';

describe('TournamentsViewComponent', () => {
  let component: TournamentsViewComponent;
  let fixture: ComponentFixture<TournamentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
