import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHome3Component } from './transactionHome.component';

describe('HomeComponent', () => {
  let component: TransactionHome3Component;
  let fixture: ComponentFixture<TransactionHome3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHome3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
