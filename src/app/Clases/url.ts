import { Persona } from "./persona";

export class Url {

	id: number;
	urlFoto: string;
	descripcion: string;
	estudio: bigint;
	estudioPersona: bigint;
	certificacion: bigint;
	certificacionPersona: bigint;
	conocimiento: bigint;
	conocimientoPersona: bigint;
	proyecto: bigint;
	proyectoPersona: bigint;
	persona: Persona;

}
