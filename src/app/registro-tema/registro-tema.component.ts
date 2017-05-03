import { Component, OnInit } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Component({
  selector: 'app-registro-tema',
  templateUrl: './registro-tema.component.html',
  styleUrls: ['./registro-tema.component.css']
})
export class RegistroTemaComponent implements OnInit {
  cursos:Curso[];
  selectedCurso: Curso = {codigo:" ",descripcion:"Seleccione un curso"};

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
  }

  ngOnInit() {
  }

}
