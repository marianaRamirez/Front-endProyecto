import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPreguntaComponent } from './registro-pregunta.component';

describe('RegistroPreguntaComponent', () => {
  let component: RegistroPreguntaComponent;
  let fixture: ComponentFixture<RegistroPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
