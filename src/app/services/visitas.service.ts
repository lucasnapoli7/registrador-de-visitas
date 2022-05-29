import { Injectable } from '@angular/core';
import { Visita } from '../models/visita.model';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  listaVisitas: Visita[] = [
    { dniVisitante: "12345678", fechaIngreso: "02/04/2022", horaIngreso: "10:15", personaVisitada: "Lautaro Ariel Basanta" },
    { dniVisitante: "12345678", fechaIngreso: "05/04/2022", horaIngreso: "11:55", personaVisitada: "Esteban Gawron" },
    { dniVisitante: "12345678", fechaIngreso: "18/04/2022", horaIngreso: "09:12", personaVisitada: "Walter Marcote" },
    { dniVisitante: "12345678", fechaIngreso: "03/05/2022", horaIngreso: "10:03", personaVisitada: "Rocio Diaz" },
    { dniVisitante: "12345678", fechaIngreso: "14/05/2022", horaIngreso: "15:45", personaVisitada: "Walter Marcote" },
    { dniVisitante: "36965871", fechaIngreso: "17/05/2022", horaIngreso: "17:45", personaVisitada: "Rocio Diaz" },
  ]

  listaVisitasPorPersona: Visita[] = [];

  constructor() { }

  obtenerVisitasPorDni(dni:string){
    return this.listaVisitas.filter(v => (v.dniVisitante == dni));
  }

  crearVisita(visita:Visita){
    this.listaVisitas.push(visita);
  }

  eliminarVisita(visita:Visita){
    let index = this.listaVisitas.findIndex(v => v == visita);
    this.listaVisitas.splice(index, 1);
  }

}
