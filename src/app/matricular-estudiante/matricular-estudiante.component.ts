import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matricular-estudiante',
  templateUrl: './matricular-estudiante.component.html',
  styleUrls: ['./matricular-estudiante.component.css']
})
export class MatricularEstudianteComponent implements OnInit {
  cursos:any[];
  selectedCurso: string;
  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
  }

  ngOnInit() {
  }

}
