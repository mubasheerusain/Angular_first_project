import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainApprovedComponent } from './main-approved.component';

describe('MainApprovedComponent', () => {
  let component: MainApprovedComponent;
  let fixture: ComponentFixture<MainApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
