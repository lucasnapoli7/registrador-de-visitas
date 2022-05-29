import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  listaEmpleados: Empleado[] = [
    { nombre:"Daniel de Almeida", sector: "RRHH"},
    { nombre:"Dario Riva", sector: "QA"},
    { nombre:"Diego Pellegrini", sector: "COMERCIAL"},
    { nombre:"Federico Musso", sector: "RRHH"},
    { nombre:"Laura Rodriguez", sector: "QA"},
    { nombre:"Lautaro Ariel Basanta", sector: "COMERCIAL"},
    { nombre:"Manuel Castello", sector: "RRHH"},
    { nombre:"Paula Barrios", sector: "QA"},
    { nombre:"Rocio Diaz", sector: "COMERCIAL"},
    { nombre:"Sebastian Parasis", sector: "RRHH"},
    { nombre:"Walter Marcote", sector: "QA"},
    { nombre:"Guillermo Balcarcel", sector: "COMERCIAL"},
    { nombre:"Esteban Gawron", sector: "RRHH"},
    { nombre:"Enzo Peddini", sector: "QA"},
    { nombre:"Andrea Russo", sector: "COMERCIAL"},
    { nombre:"Adrian Zarate", sector: "RRHH"},
    { nombre:"Melisa Yune", sector: "QA"},
    { nombre:"Nicolas Russmann", sector: "COMERCIAL"},
    { nombre:"Galo Trillo", sector: "RRHH"},
    { nombre:"Diego Pellegrini", sector: "QA"},
  ];

  constructor() { }

  devolverSectores(){
    let sectores = [""];
    this.listaEmpleados.forEach(e => {
      if(!sectores.includes(e.sector)){
        sectores.push(e.sector)
      }
    })
    sectores = sectores.slice(1);
    return sectores;
  }

  devolverEmpleadosPorSector(sector: string){
    let empleados = this.listaEmpleados.filter(e => (e.sector == sector));
    return empleados.map(e => {return e.nombre});
  }

  buscarPersona(nombre:string){
    let persona = this.listaEmpleados.find(p => p.nombre == nombre);
    return persona;
  }

}
