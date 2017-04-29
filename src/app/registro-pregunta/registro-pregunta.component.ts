import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-pregunta',
  templateUrl: './registro-pregunta.component.html',
  styleUrls: ['./registro-pregunta.component.css']
})
export class RegistroPreguntaComponent implements OnInit {
  cursos:any[];
  selectedCurso: string;
  temas:any[];
  selectedTema: string;
  subtemas: any[];
  selectedSubtema: string;

  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
    this.temas = ["Tema 1","Tema 2","Tema 3","Tema 4"];
    this.selectedTema = "Seleccione el tema";
    this.subtemas = ["Subtema 1","Subtema 2", "Subtema 3", "Subtema 4"];
    this.selectedSubtema = "Seleccione el subtema";
  }

  ngOnInit() {
  }

}
