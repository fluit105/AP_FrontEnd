import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    NavbarComponent,
    PagenotfoundComponent,
    EstudiosComponent,
    ConocimientosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    CertificacionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
