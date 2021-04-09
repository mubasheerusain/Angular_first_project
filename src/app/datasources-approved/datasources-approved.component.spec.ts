import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesApprovedComponent } from './datasources-approved.component';

describe('DatasourcesApprovedComponent', () => {
  let component: DatasourcesApprovedComponent;
  let fixture: ComponentFixture<DatasourcesApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourcesApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcesApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
