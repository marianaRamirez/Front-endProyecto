import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginLabel: string;

  constructor(){
    localStorage.setItem('nombreUsuario',"Iniciar Sesión");
    this.loginLabel = localStorage.getItem('nombreUsuario');

  }
}
