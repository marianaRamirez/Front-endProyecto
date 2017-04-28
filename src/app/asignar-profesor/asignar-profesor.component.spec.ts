import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProfesorComponent } from './asignar-profesor.component';

describe('AsignarProfesorComponent', () => {
  let component: AsignarProfesorComponent;
  let fixture: ComponentFixture<AsignarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
