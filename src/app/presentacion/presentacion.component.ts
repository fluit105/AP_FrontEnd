import { Component, OnInit } from '@angular/core';
import { BasicInfoService } from '../servicies/basic-info.service';

@Component({
	selector: 'app-presentacion',
	templateUrl: './presentacion.component.html',
	styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
	infoBasica: any;

	constructor(private datosBasicos: BasicInfoService) { }

	ngOnInit(): void {
		this.datosBasicos.obtenerDatos().subscribe(data => {
			this.infoBasica = data;
		});
	}
	
}
