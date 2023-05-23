import { Component, OnInit } from '@angular/core';
import { Url } from '../Clases/url';
import { UrlsService } from '../servicies/pull-urls-service.service';

@Component({
  selector: 'app-cardslide',
  templateUrl: './cardslide.component.html',
  styleUrls: ['./cardslide.component.css']
})
export class CardslideComponent implements OnInit {

  url: Url[];

  constructor(
    private urlsServicio: UrlsService,
  ) { }

  ngOnInit(): void {
    this.obtenerDatosURLs();
  }

  private obtenerDatosURLs() {
		this.urlsServicio.obtenerURLs().subscribe(dato => {
			this.url = dato;
		})
	}

}
