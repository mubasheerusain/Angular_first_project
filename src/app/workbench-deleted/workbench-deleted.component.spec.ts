import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchDeletedComponent } from './workbench-deleted.component';

describe('WorkbenchDeletedComponent', () => {
  let component: WorkbenchDeletedComponent;
  let fixture: ComponentFixture<WorkbenchDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
