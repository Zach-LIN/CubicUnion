import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHome2Component } from './transactionHome.component';

describe('HomeComponent', () => {
  let component: TransactionHome2Component;
  let fixture: ComponentFixture<TransactionHome2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHome2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
