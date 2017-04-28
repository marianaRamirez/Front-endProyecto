import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarEvaluacionComponent } from './habilitar-evaluacion.component';

describe('HabilitarEvaluacionComponent', () => {
  let component: HabilitarEvaluacionComponent;
  let fixture: ComponentFixture<HabilitarEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilitarEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
