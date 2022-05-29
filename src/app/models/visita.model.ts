import { Empleado } from "./empleado.model";

export interface Visita {
    dniVisitante: string;
    fechaIngreso: string;
    horaIngreso: string;
    personaVisitada: string;
}