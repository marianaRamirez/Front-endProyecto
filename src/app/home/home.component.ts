import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: string = localStorage.getItem('idUsuario');
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('idUsuario') == undefined){
      this.router.navigate(['/login']);
    }
  }

}
