import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  user: Usuario;
  date: Date;
  es: any;
  constructor() {
    this.user = {
      identificacion: "",
      carne: "",
    	nombre: "",
    	primerApellido: "",
    	segundoApellido: "",
    	fechaNacimiento: "",
    	correoElectronico: "",
      contrasena: ""
    };
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ]
    }
  }

  registrarUsuario(){
    alert(this.user.nombre + " ha sido registrado");
    this.user = {
      identificacion: "",
      carne: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      fechaNacimiento: "",
      correoElectronico: "",
      contrasena: ""
    };

  }

  ngOnInit() {
  }

}
