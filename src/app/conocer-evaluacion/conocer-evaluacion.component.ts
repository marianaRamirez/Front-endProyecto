import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocer-evaluacion',
  templateUrl: './conocer-evaluacion.component.html',
  styleUrls: ['./conocer-evaluacion.component.css']
})
export class ConocerEvaluacionComponent implements OnInit {
    tipoEvaluacion: any[];
    selectedTipo: string;

  constructor() {
    this.tipoEvaluacion = ["Formativa","Sumativa"];
    this.selectedTipo = "Seleccione el tipo de evaluación";
  }

  ngOnInit() {
  }

}
