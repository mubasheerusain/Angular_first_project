import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWorkbenchComponent } from './request-workbench.component';

describe('RequestWorkbenchComponent', () => {
  let component: RequestWorkbenchComponent;
  let fixture: ComponentFixture<RequestWorkbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWorkbenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
