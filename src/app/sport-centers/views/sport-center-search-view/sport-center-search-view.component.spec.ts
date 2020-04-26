import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCenterSearchViewComponent } from './sport-center-search-view.component';

describe('SportCenterSearchViewComponent', () => {
  let component: SportCenterSearchViewComponent;
  let fixture: ComponentFixture<SportCenterSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCenterSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportCenterSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
