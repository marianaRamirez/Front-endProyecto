import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTemaComponent } from './registro-tema.component';

describe('RegistroTemaComponent', () => {
  let component: RegistroTemaComponent;
  let fixture: ComponentFixture<RegistroTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
