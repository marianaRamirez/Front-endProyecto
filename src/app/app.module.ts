import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroEvaluacionComponent } from './registro-evaluacion/registro-evaluacion.component';
import { RegistroPreguntaComponent } from './registro-pregunta/registro-pregunta.component';
import { HabilitarEvaluacionComponent } from './habilitar-evaluacion/habilitar-evaluacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroTemaComponent } from './registro-tema/registro-tema.component';
import { RegistroSubtemaComponent } from './registro-subtema/registro-subtema.component';
import { RegistroCursoComponent } from './registro-curso/registro-curso.component';
import { MatricularEstudianteComponent } from './matricular-estudiante/matricular-estudiante.component';
import { ConocerEvaluacionComponent } from './conocer-evaluacion/conocer-evaluacion.component';
import { AsignarProfesorComponent } from './asignar-profesor/asignar-profesor.component';

const appRoutes: Routes = [
  { path: 'registroUsuario', component: RegistroUsuarioComponent },
  { path: 'registroEvaluacion', component: RegistroEvaluacionComponent },
  { path: 'registroPregunta', component: RegistroPreguntaComponent },
  { path: 'habilitarEvaluacion', component: HabilitarEvaluacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registroTema', component: RegistroTemaComponent },
  { path: 'registroSubtema', component: RegistroSubtemaComponent },
  { path: 'registroCurso', component: RegistroCursoComponent },
  { path: 'matricularEstudiante', component: MatricularEstudianteComponent },
  { path: 'conocerEvaluacion', component: ConocerEvaluacionComponent },
  { path: 'asignarProfesor', component: AsignarProfesorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    RegistroEvaluacionComponent,
    RegistroPreguntaComponent,
    HabilitarEvaluacionComponent,
    LoginComponent,
    RegistroTemaComponent,
    RegistroSubtemaComponent,
    RegistroCursoComponent,
    MatricularEstudianteComponent,
    ConocerEvaluacionComponent,
    AsignarProfesorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
