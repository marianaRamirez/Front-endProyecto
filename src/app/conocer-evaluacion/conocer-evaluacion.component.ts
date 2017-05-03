import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../interfaces/evaluacion';

@Component({
  selector: 'app-conocer-evaluacion',
  templateUrl: './conocer-evaluacion.component.html',
  styleUrls: ['./conocer-evaluacion.component.css']
})
export class ConocerEvaluacionComponent implements OnInit {
    tipoEvaluacion: any[];
    selectedTipo: string;
    evaluaciones:Evaluacion[];
    selectedEvaluacion: Evaluacion = {nombre:"Seleccione una evaluación", puntaje:"", porcentaje:"", tiempo:""};

  constructor() {
    this.tipoEvaluacion = ["Formativa","Sumativa"];
    this.selectedTipo = "Seleccione el tipo de evaluación";
    this.evaluaciones = [{nombre:"Evaluacion 1", puntaje:"", porcentaje:"", tiempo:""},{nombre:"Evaluacion 2", puntaje:"", porcentaje:"", tiempo:""},{nombre:"Evaluacion 3", puntaje:"", porcentaje:"", tiempo:""}];
  }

  ngOnInit() {
  }

}
