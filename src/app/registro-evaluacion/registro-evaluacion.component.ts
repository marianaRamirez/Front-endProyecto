import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta';
import { Evaluacion } from '../interfaces/evaluacion';

@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.css']
})

export class RegistroEvaluacionComponent implements OnInit {

  cursos: any[];
  tipoEvaluacion: any[];
  opcionPresentacion: any[];
  selectedCurso = {codigo:" ",descripcion:"Seleccione un curso"};
  selectedTipo: string;
  selectedPresentacion: string;
  preguntasSeleccion: Pregunta[];
  preguntasComplete: Pregunta[];
  preguntasDesarrollo: Pregunta[];
  selectedPreguntasMarqueX: Pregunta[];
  selectedPreguntasComplete: Pregunta[];
  selectedPreguntasDesarrollo: Pregunta[];
  selectedPreguntas: Pregunta[];
  evaluacion: Evaluacion;
  date: Date;
  es: any;

  constructor() {
    this.evaluacion = { nombre: "", puntaje: "", porcentaje: "", tiempo: "" };
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.tipoEvaluacion = ["Formativa","Sumativa"];
    this.selectedTipo = "Seleccione el tipo de evaluación";
    this.selectedPresentacion = "Seleccione la opción de presentación";
    this.opcionPresentacion = ["Aleatoriamente","En orden de selección"];
    this.preguntasSeleccion= new Array<Pregunta>();
    this.preguntasSeleccion.push({descripcion: "Pregunta 1 Marque con X", tipo: 1, tema: "Tema 1", subtema: "Subtema 1"});
    this.selectedPreguntasMarqueX = new Array<Pregunta>();
    this.selectedPreguntasComplete = new Array<Pregunta>();
    this.selectedPreguntasDesarrollo = new Array<Pregunta>();
    this.selectedPreguntas = new Array<Pregunta>();
    this.preguntasComplete= new Array<Pregunta>();
    this.preguntasComplete.push({descripcion: "Pregunta 1 Complete", tipo: 2, tema: "Tema 2", subtema: "Subtema 1"});
    this.preguntasDesarrollo= new Array<Pregunta>();
    this.preguntasDesarrollo.push({descripcion: "Pregunta 1 Desarrollo", tipo: 3, tema: "Tema 3", subtema: "Subtema 2"});
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
    }

  }

  ngOnInit() { }

  agregarPreguntaMarqueX(){
    for(let seleccionada of this.selectedPreguntasMarqueX){
      var i = this.selectedPreguntas.indexOf(seleccionada,0);
      if(i > -1){
        alert("Ya esta agregada");
      }else{
        this.selectedPreguntas.push(seleccionada);
      }
    }
  }

  agregarPreguntaComplete(){
    for(let seleccionada of this.selectedPreguntasComplete){
      var i = this.selectedPreguntas.indexOf(seleccionada,0);
      if(i > -1){
        alert("Ya esta agregada");
      }else{
        this.selectedPreguntas.push(seleccionada);
      }
    }
  }

  agregarPreguntaDesarrollo(){
    for(let seleccionada of this.selectedPreguntasDesarrollo){
      var i = this.selectedPreguntas.indexOf(seleccionada,0);
      if(i > -1){
        alert("Ya esta agregada");
      }else{
        this.selectedPreguntas.push(seleccionada);
      }
    }
  }

}
