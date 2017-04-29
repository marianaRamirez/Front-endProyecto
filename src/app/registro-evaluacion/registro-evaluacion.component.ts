import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.css']
})

export class RegistroEvaluacionComponent implements OnInit {

  cursos: any[];
  tipoEvaluacion: any[];
  opcionPresentacion: any[];
  selectedCurso: string;
  selectedTipo: string;
  selectedPresentacion: string;
  constructor() {
    this.cursos = ["Curso 1","Curso 2","Curso 3","Curso 4"];
    this.selectedCurso = "Seleccione el curso";
    this.tipoEvaluacion = ["Formativa","Sumativa"];
    this.selectedTipo = "Seleccione el tipo de evaluación";
    this.selectedPresentacion = "Seleccione la opción de presentación";
    this.opcionPresentacion = ["Aleatoriamente","En orden de selección"];
  }

  ngOnInit() {

    //document.getElementById('datetimepicker1').datetimepicker();
  }

}
