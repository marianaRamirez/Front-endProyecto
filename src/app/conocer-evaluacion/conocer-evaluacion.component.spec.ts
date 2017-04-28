import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocerEvaluacionComponent } from './conocer-evaluacion.component';

describe('ConocerEvaluacionComponent', () => {
  let component: ConocerEvaluacionComponent;
  let fixture: ComponentFixture<ConocerEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocerEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocerEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
