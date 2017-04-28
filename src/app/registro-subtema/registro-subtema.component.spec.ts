import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubtemaComponent } from './registro-subtema.component';

describe('RegistroSubtemaComponent', () => {
  let component: RegistroSubtemaComponent;
  let fixture: ComponentFixture<RegistroSubtemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSubtemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSubtemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
