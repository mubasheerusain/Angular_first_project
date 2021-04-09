import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchRunningComponent } from './workbench-running.component';

describe('WorkbenchRunningComponent', () => {
  let component: WorkbenchRunningComponent;
  let fixture: ComponentFixture<WorkbenchRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchRunningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
