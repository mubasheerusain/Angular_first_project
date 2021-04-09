import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRejectedComponent } from './main-rejected.component';

describe('MainRejectedComponent', () => {
  let component: MainRejectedComponent;
  let fixture: ComponentFixture<MainRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
