import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCentersSearchComponent } from './sport-centers-search.component';

describe('SportCentersSearchComponent', () => {
  let component: SportCentersSearchComponent;
  let fixture: ComponentFixture<SportCentersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCentersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportCentersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
