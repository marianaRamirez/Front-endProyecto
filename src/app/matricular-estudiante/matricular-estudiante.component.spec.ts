import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularEstudianteComponent } from './matricular-estudiante.component';

describe('MatricularEstudianteComponent', () => {
  let component: MatricularEstudianteComponent;
  let fixture: ComponentFixture<MatricularEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricularEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
