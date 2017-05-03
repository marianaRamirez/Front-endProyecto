import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public loginForm = this.fb.group({
    usuario: ["", Validators.required],
    clave: ["", Validators.required]
  });
  constructor(public fb: FormBuilder, private router: Router) { }
  doLogin(event) {
    if(this.loginForm.value.usuario == "user"){
      if(this.loginForm.value.clave == "clave"){
        localStorage.setItem('idUsuario', this.loginForm.value.usuario);
        localStorage.setItem('nombreUsuario', this.loginForm.value.usuario);

        this.router.navigate(['/home']);

      }
    }
  }

}
