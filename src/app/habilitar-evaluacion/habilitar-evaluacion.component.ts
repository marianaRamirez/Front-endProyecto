import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilitar-evaluacion',
  templateUrl: './habilitar-evaluacion.component.html',
  styleUrls: ['./habilitar-evaluacion.component.css']
})
export class HabilitarEvaluacionComponent implements OnInit {
    cursos:any[];
    selectedCurso: string;
    evaluaciones:any[];
    selectedEvaluacion: string;

  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
    this.evaluaciones = ["Evaluacion 1","Evaluacion 2","Evaluacion 3","Evaluacion 4"];
    this.selectedEvaluacion = "Seleccione la evaluación";
  }

  ngOnInit() {
  }

}
