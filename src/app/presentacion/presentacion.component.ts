import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/pull-personas-service.service';
import { UrlsService } from '../services/pull-urls-service.service';
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
	resumen: string[];

	constructor(
		private personasServicio: PersonasService,
		private urlsServicio: UrlsService,
	) { }

	ngOnInit(): void {
		this.obtenerDatosPersonas();
		this.obtenerDatosURLs();
	}

	private obtenerDatosPersonas() {
		this.personasServicio.obtenerPersonas().subscribe(dato => {
			this.persona = dato;
			this.stringProcessing();
		})
	}

	private obtenerDatosURLs() {
		this.urlsServicio.obtenerURLs().subscribe(dato => {
			this.url = dato;
		})
	}

	private stringProcessing() {
		this.resumen = this.persona[0].resumen.split('\n\n');
	}

}