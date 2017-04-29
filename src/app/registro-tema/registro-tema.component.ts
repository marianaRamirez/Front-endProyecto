import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-tema',
  templateUrl: './registro-tema.component.html',
  styleUrls: ['./registro-tema.component.css']
})
export class RegistroTemaComponent implements OnInit {
  cursos:any[];
  selectedCurso: string;

  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
  }

  ngOnInit() {
  }

}
