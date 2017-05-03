import { Component, OnInit, HostListener } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';
import { Matricula } from '../interfaces/matricula';
import { Curso } from '../interfaces/curso';

@Component({
  selector: 'app-matricular-estudiante',
  templateUrl: './matricular-estudiante.component.html',
  styleUrls: ['./matricular-estudiante.component.css']
})
export class MatricularEstudianteComponent implements OnInit {
  cursos:any[];
  selectedCurso: Curso = {codigo:" ",descripcion:"Seleccione un curso"};
  estudiantes: Estudiante[];
  estudiantesMatriculados: Matricula[];
  selectedEstudiantes: Estudiante[];
  contactoscorreo: any[];

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.estudiantes = [{carne: "12345",nombre: "Jorge",primerApellido:"Delgado",segundoApellido:"Rojas",correo: "jdr@gmail.com", identificacion: "1-123-123", fechaNacimiento:  "24/03/1992"},{carne: "67890",nombre: "Ana",primerApellido:"Salazar",segundoApellido:"Murillo",correo: "jdr@gmail.com", identificacion: "1-123-123", fechaNacimiento:  "24/03/1992"},{carne: "24680",nombre: "Daniela",primerApellido:"Castillo",segundoApellido:"Marin",correo: "jdr@gmail.com", identificacion: "1-123-123", fechaNacimiento:  "24/03/1992"}];
    this.selectedEstudiantes = new Array<Estudiante>();
    this.estudiantesMatriculados = new Array<Matricula>();
  }

  ngOnInit() {
  }

  cursoSelecionado(){
    return this.selectedCurso == {codigo:" ",descripcion:"Seleccione un curso"};
  }

  matricularEstudiante(){

    for(let estudiante of this.selectedEstudiantes){
      let matricula = {estudiante: estudiante, curso:this.selectedCurso};
      var i = this.estudiantesMatriculados.indexOf(matricula,0);
      if(i > -1){
        alert("Ya esta matriculado");
      }else{
        this.estudiantesMatriculados.push(matricula);
      }
    }
  }



}
