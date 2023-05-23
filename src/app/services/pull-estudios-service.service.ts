import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from '../Clases/estudio';

@Injectable({
  providedIn: 'root'
})
export class PullEstudiosServiceService {

  private estudiosURL = "https://portfolio-backend-t3x5.onrender.com/api/estudios";

  constructor(private httpClient : HttpClient) { }

  obtenerEstudios(): Observable<Estudio[]> {
		return this.httpClient.get<Estudio[]>(this.estudiosURL);
	}

}
