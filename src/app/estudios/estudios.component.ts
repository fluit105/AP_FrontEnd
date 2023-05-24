import { Component, OnInit } from '@angular/core';
import { Estudio } from '../Clases/estudio';
import { Url } from '../Clases/url';
import { UrlsService } from '../services/pull-urls-service.service';
import { PullEstudiosServiceService } from '../services/pull-estudios-service.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudio: Estudio[];
  url: Url[];

  constructor(
    private estudiosServicio: PullEstudiosServiceService,
    private urlsServicio: UrlsService
  ) { }

  ngOnInit(): void {
    this.obtenerDatosEstudios();
    this.obtenerDatosURLs();
  }

  private obtenerDatosURLs() {
    this.urlsServicio.obtenerURLs().subscribe(dato => {
      this.url = dato;
    })
  }

  private obtenerDatosEstudios() {
    this.estudiosServicio.obtenerEstudios().subscribe(dato => {
      this.estudio = dato;
    })
  }
}
