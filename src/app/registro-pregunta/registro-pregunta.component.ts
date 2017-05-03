import { Component, OnInit } from '@angular/core';
import { Tema } from '../interfaces/tema';
import { Subtema } from '../interfaces/subtema';
import { Curso } from '../interfaces/curso';
import { Respuesta } from '../interfaces/respuesta';
import { TipoPregunta } from '../interfaces/tipoPregunta';

@Component({
  selector: 'app-registro-pregunta',
  templateUrl: './registro-pregunta.component.html',
  styleUrls: ['./registro-pregunta.component.css']
})
export class RegistroPreguntaComponent implements OnInit {
  cursos:Curso[];
  selectedCurso: Curso = {codigo:" ",descripcion:"Seleccione un curso"};
  temas:Tema[];
  selectedTema: Tema = {descripcion:"Seleccione un tema",curso:" "};
  subtemas: Subtema[];
  selectedSubtema: Subtema = {descripcion:"Seleccione un subtema", tema: "", curso:" "};
  selectedRespuesta: Respuesta = {descripcion:"Seleccione la respuesta correcta"};
  tiposPregunta: TipoPregunta[];
  respuestas: Respuesta[];
  esMarqueX: boolean=true;
  esComplete: boolean=true;
  selectedEntry: TipoPregunta;

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.temas = [{descripcion:"Tema 1",curso:"Curso 1"},{descripcion:"Tema 2",curso:"Curso 1"}];
    this.subtemas = [{descripcion: "Subtema 1", tema: "Tema 1",curso:"Curso 1"},{descripcion: "Subtema 2", tema: "Tema 2",curso:"Curso 1"}];
    this.respuestas = [{descripcion: "Opción 1"},{descripcion: "Opción 2"},{descripcion: "Opción 3"},{descripcion: "Opción 4"}];
    this.tiposPregunta = [{descripcion: "Selección Única (Marque con X)",tipo: 1},{descripcion: "Completar el espacio en blanco",tipo: 2},{descripcion: "Desarrollo",tipo: 3}];
  }

  ngOnInit() {
  }

  mostrarCuadroPregunta(){
    this.esMarqueX = true;
    this.esComplete = true;
    if(this.selectedEntry.tipo == 1){
      this.esMarqueX = false;
    }else{
      this.esComplete = false;
    }
  }

      onChangeTipoPregunta(tipo: TipoPregunta) {
        this.selectedEntry = tipo;
    }
  }
