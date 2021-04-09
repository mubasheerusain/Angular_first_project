import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchAllComponent } from './workbench-all.component';

describe('WorkbenchAllComponent', () => {
  let component: WorkbenchAllComponent;
  let fixture: ComponentFixture<WorkbenchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbenchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
