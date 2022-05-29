import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class RenaperService {

  datosRenaper: Persona[] = [
    {dni:"12345678",nombres:"Lucas Álan",apellido:"Nápoli",fechaNacimiento:"19/11/1999"},
    {dni:"83387182",nombres:"Lawry",apellido:"Haswall",fechaNacimiento:"20/05/1993"},
    {dni:"36965871",nombres:"Richy",apellido:"Presser",fechaNacimiento:"22/02/1962"},
    {dni:"89861704",nombres:"Alphonso",apellido:"Staresmeare",fechaNacimiento:"19/04/1968"},
    {dni:"04388230",nombres:"Padriac",apellido:"Le Sur",fechaNacimiento:"17/12/1986"},
    {dni:"53720120",nombres:"Phaedra",apellido:"Flasby",fechaNacimiento:"24/12/1984"},
    {dni:"69196801",nombres:"Joleen",apellido:"Secombe",fechaNacimiento:"14/06/1973"},
    {dni:"58503024",nombres:"Alvira",apellido:"Brunnen",fechaNacimiento:"08/02/1954"},
    {dni:"43246201",nombres:"Tina",apellido:"Friday",fechaNacimiento:"29/11/1980"},
    {dni:"31674714",nombres:"Theressa",apellido:"Tough",fechaNacimiento:"17/07/1998"},
    {dni:"43109805",nombres:"My",apellido:"McVittie",fechaNacimiento:"03/07/1978"}
  ]

  constructor() { }

  devolverPersonaSegunDni(dni:string){
    let persona = this.datosRenaper.find(p => p.dni == dni);
    if(persona != undefined){
      return persona;
    }
    return undefined;
  }

}
