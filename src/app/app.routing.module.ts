import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { EstudiosComponent } from "./estudios/estudios.component";
import { CertificacionesComponent } from "./certificaciones/certificaciones.component";
import { ConocimientosComponent } from "./conocimientos/conocimientos.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";

const routes: Routes = [
	{ path: '', redirectTo: '/estudios', pathMatch: 'full' },
	{ path: 'estudios', component: EstudiosComponent },
	{ path: 'certificaciones', component: CertificacionesComponent },
	{ path: 'conocimientos', component: ConocimientosComponent },
	{ path: 'experiencia', component: ExperienciaComponent },
	{ path: 'proyectos', component: ProyectosComponent },
	{ path: '**', component: PagenotfoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }