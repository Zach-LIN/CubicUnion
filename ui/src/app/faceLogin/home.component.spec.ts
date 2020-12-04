import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceLoginComponent } from './home.component';

describe('Home2Component', () => {
  let component: FaceLoginComponent;
  let fixture: ComponentFixture<FaceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
