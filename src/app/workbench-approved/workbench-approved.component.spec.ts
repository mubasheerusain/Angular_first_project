import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchApprovedComponent } from './workbench-approved.component';

describe('WorkbenchApprovedComponent', () => {
  let component: WorkbenchApprovedComponent;
  let fixture: ComponentFixture<WorkbenchApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
