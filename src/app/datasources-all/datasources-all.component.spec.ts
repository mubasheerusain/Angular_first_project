import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourcesAllComponent } from './datasources-all.component';

describe('DatasourcesAllComponent', () => {
  let component: DatasourcesAllComponent;
  let fixture: ComponentFixture<DatasourcesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasourcesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourcesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
