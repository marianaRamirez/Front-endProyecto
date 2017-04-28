import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEvaluacionComponent } from './registro-evaluacion.component';

describe('RegistroEvaluacionComponent', () => {
  let component: RegistroEvaluacionComponent;
  let fixture: ComponentFixture<RegistroEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
