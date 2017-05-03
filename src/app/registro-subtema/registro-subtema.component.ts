import { Component, OnInit } from '@angular/core';
import { Curso } from '../interfaces/curso';
import { Tema } from '../interfaces/tema';

@Component({
  selector: 'app-registro-subtema',
  templateUrl: './registro-subtema.component.html',
  styleUrls: ['./registro-subtema.component.css']
})
export class RegistroSubtemaComponent implements OnInit {
  cursos:Curso[];
  selectedCurso: Curso = {codigo:" ",descripcion:"Seleccione un curso"};
  temas:Tema[];
  selectedTema: Tema = {descripcion:"Seleccione un tema",curso:" "};

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.temas = [{descripcion:"Tema 1",curso:"Curso 1"},{descripcion:"Tema 2",curso:"Curso 1"}];

  }

  ngOnInit() {
  }

}
