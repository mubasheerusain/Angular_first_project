import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesPendingComponent } from './datasources-pending.component';

describe('DatasourcesPendingComponent', () => {
  let component: DatasourcesPendingComponent;
  let fixture: ComponentFixture<DatasourcesPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourcesPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcesPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
