import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../servicies/pull-personas-service.service';
import { UrlsService } from '../servicies/pull-urls-service.service';
import { Persona } from '../Clases/persona';
import { Url } from '../Clases/url';

@Component({
	selector: 'app-presentacion',
	templateUrl: './presentacion.component.html',
	styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

	persona: Persona[];
	url: Url[];

	constructor(
		private personasServicio : PersonasService,
		private urlsServicio : UrlsService,
		) { }

	ngOnInit(): void {
		this.obtenerDatosPersonas();
	}

	private obtenerDatosPersonas() {
		this.personasServicio.obtenerPersonas().subscribe(dato => {
			this.persona = dato;
		})
	} 

	private obtenerDatosURLs() {
		this.urlsServicio.obtenerURLs().subscribe(dato => {
			this.url = dato;
		})
	} 

}