import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Clases/persona';

@Injectable({
	providedIn: 'root'
})
export class PersonasService {

	private personasURL = "https://portfolio-backend-t3x5.onrender.com/api/personas";

	constructor(private httpClient : HttpClient) { }
	
	obtenerPersonas(): Observable<Persona[]> {
		return this.httpClient.get<Persona[]>(this.personasURL);
	}

}
