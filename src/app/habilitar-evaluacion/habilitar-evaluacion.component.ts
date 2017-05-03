import { Component, OnInit } from '@angular/core';
import { Curso } from '../interfaces/curso';
import { Evaluacion } from '../interfaces/evaluacion';
import { Estudiante } from '../interfaces/estudiante';

@Component({
  selector: 'app-habilitar-evaluacion',
  templateUrl: './habilitar-evaluacion.component.html',
  styleUrls: ['./habilitar-evaluacion.component.css']
})
export class HabilitarEvaluacionComponent implements OnInit {
    cursos:Curso[];
    selectedCurso: Curso = {codigo:" ",descripcion:"Seleccione un curso"};
    evaluaciones:Evaluacion[];
    selectedEvaluacion: Evaluacion = {nombre:"Seleccione una evaluación", puntaje:"", porcentaje:"", tiempo:""};
    estudiantes: Estudiante[];
    estudiantesAgregados: Estudiante[];
    selectedEstudiantes: Estudiante[];

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.evaluaciones = [{nombre:"Evaluacion 1", puntaje:"", porcentaje:"", tiempo:""},{nombre:"Evaluacion 2", puntaje:"", porcentaje:"", tiempo:""},{nombre:"Evaluacion 3", puntaje:"", porcentaje:"", tiempo:""}];
    this.estudiantes= new Array<Estudiante>();
    this.estudiantes.push({carne: "12345",nombre: "Jorge",primerApellido: "Delgado",segundoApellido: "Rojas",correo: "jdr@gmail.com", identificacion: "1-123-123", fechaNacimiento:  "24/03/1992"});
    this.estudiantesAgregados = new Array<Estudiante>();
    this.selectedEstudiantes = new Array<Estudiante>();
  }
  ngOnInit() {
  }

  agregarEstudiantes(){
    for(let estudiante of this.selectedEstudiantes){
      var i = this.estudiantesAgregados.indexOf(estudiante,0);
      if(i > -1){
        alert("Ya esta agregado");
      }else{
        this.estudiantesAgregados.push(estudiante);

      }
  }
}

}
