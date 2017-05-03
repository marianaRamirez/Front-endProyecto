import { Component, OnInit } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Component({
  selector: 'app-asignar-profesor',
  templateUrl: './asignar-profesor.component.html',
  styleUrls: ['./asignar-profesor.component.css']
})

export class AsignarProfesorComponent implements OnInit {
  cursos: Curso[];
  cursosAsignados: Curso[];
  selectedCurso = {codigo:" ",descripcion:"Seleccione un curso"};
  cursosProfesor: string = "No tiene cursos asignados";

  constructor() {
    this.cursos = [{codigo:"1234",descripcion:"Curso 1"},{codigo:"01234",descripcion:"Curso 2"},{codigo:"12345",descripcion:"Curso 3"}];
    this.cursosAsignados = new Array<Curso>();
  }

  ngOnInit() {
  }

  agregarCurso(){
    if(this.cursosAsignados.length == 0){
      this.cursosProfesor = "";
    }
    if(this.selectedCurso.codigo != " "){

      var i = this.cursos.indexOf(this.selectedCurso,0);
      if(i > -1){
        this.cursos.splice(i,1);
      }
      this.cursosAsignados.push(this.selectedCurso);

      let str = this.cursosProfesor.concat("Código: " + this.selectedCurso.codigo + " Curso: " + this.selectedCurso.descripcion + "\n");

      this.cursosProfesor = str;

      this.selectedCurso = {codigo:" ",descripcion:"Seleccione un curso:"};
    }
  }

}
