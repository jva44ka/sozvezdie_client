import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursListPageComponent } from './tours-list-page.component';

describe('ToursListPageComponent', () => {
  let component: ToursListPageComponent;
  let fixture: ComponentFixture<ToursListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
