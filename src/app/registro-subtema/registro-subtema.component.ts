import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-subtema',
  templateUrl: './registro-subtema.component.html',
  styleUrls: ['./registro-subtema.component.css']
})
export class RegistroSubtemaComponent implements OnInit {
  cursos:any[];
  selectedCurso: string;
  temas:any[];
  selectedTema: string;

  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
    this.temas = ["Tema 1","Tema 2","Tema 3","Tema 4"];
    this.selectedTema = "Seleccione el tema";
  }

  ngOnInit() {
  }

}
