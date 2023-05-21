import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../Clases/url';

@Injectable({
	providedIn: 'root'
})
export class UrlsService {

	private urls_URL = "https://portfolio-backend-t3x5.onrender.com/api/url_fotos";

	constructor(private httpClient : HttpClient) { }
	
	obtenerURLs(): Observable<Url[]> {
		return this.httpClient.get<Url[]>(this.urls_URL);
	}

}
