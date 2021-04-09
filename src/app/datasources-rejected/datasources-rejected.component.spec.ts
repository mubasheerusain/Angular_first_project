import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesRejectedComponent } from './datasources-rejected.component';

describe('DatasourcesRejectedComponent', () => {
  let component: DatasourcesRejectedComponent;
  let fixture: ComponentFixture<DatasourcesRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourcesRejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcesRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
