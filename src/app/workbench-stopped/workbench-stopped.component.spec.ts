import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchStoppedComponent } from './workbench-stopped.component';

describe('WorkbenchStoppedComponent', () => {
  let component: WorkbenchStoppedComponent;
  let fixture: ComponentFixture<WorkbenchStoppedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchStoppedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchStoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
