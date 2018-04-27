import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfFormComponent } from './mf-form.component';

describe('MfFormComponent', () => {
  let component: MfFormComponent;
  let fixture: ComponentFixture<MfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
