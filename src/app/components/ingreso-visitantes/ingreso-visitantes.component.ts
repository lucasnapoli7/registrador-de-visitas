import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { Visita } from 'src/app/models/visita.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RenaperService } from 'src/app/services/renaper.service';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-ingreso-visitantes',
  templateUrl: './ingreso-visitantes.component.html',
  styleUrls: ['./ingreso-visitantes.component.css']
})
export class IngresoVisitantesComponent implements OnInit {
  nombre: string = "ㅤ";
  fechaIngreso: string = "";
  dni: string = "";
  sector: string = "";
  personaAVisitar: string = "";
  nroTarjetaIngreso: string = "";
  horaIngreso: string = "";
  listaSectores: string[] = [];
  listaPersonas: string[] = [];
  visita: Visita = {
    dniVisitante: "",
    fechaIngreso: "",
    horaIngreso: "",
    personaVisitada: ""
  };
  persona: Persona | undefined = {
    nombres : "",
    apellido : "",
    dni : "",
    fechaNacimiento : ""
  };

  @Output() agregadaVisita = new EventEmitter<Visita>();
  @Output() consultarHistorial = new EventEmitter<string>();
  // Variables para la muestra de los mensajes de error
  dniError: boolean = false;
  nroIngresoError: boolean = false;

  constructor(
    private empleadosService: EmpleadosService,
    private renaperService:RenaperService
  ) { }

  ngOnInit(): void {
    this.obtenerFechaYHoraActual();
    this.listaSectores = this.empleadosService.devolverSectores();
  }

  obtenerFechaYHoraActual(){
    let date = new Date();
    this.fechaIngreso = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    this.horaIngreso = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0')
  }

  obtenerNombreyApellido(dni:string){
    this.dni = dni;
    if (this.validadorDeInputsNumericos(dni, 8)){
      // Pregunto al service el nombre y apellido. TODO
      this.dniError = false;
      this.persona = this.renaperService.devolverPersonaSegunDni(dni);
      if(this.persona != undefined){
        this.nombre = this.persona?.nombres + " " + this.persona?.apellido;
        this.consultarHistorial.emit(this.dni);
      } else {
        this.nombre = "Intente con el DNI '12345678'";
        this.dniError = true;
        this.consultarHistorial.emit("");
      }
    } else {
      this.dniError = true;
      this.nombre = "ㅤ";
      this.consultarHistorial.emit("");
    }
  }

  validadorDeInputsNumericos(value:string, number?:number){
    // Valida que sea sólo valores numericos, que sea la cantidad de caracteres enviado por parámetro.
    // Si cumple con las validaciones retorna true
    if(number == undefined){
      if(/^-?\d+$/.test(value)) return true;
    } else {
      if(/^-?\d+$/.test(value) && value.length === number) return true;
    }
    return false;
  }

  listarEmpleadosPorSector(event:any){
    this.sector = event.target.value;
    this.listaPersonas = this.empleadosService.devolverEmpleadosPorSector(event.target.value);
  }

  guardarPersonaAVisitar(event:any){
    this.personaAVisitar = event.target.value;

  }

  crearVisita(nroTarjetaIngreso:string){
    if (this.validadorDeInputsNumericos(nroTarjetaIngreso)) {
      this.nroIngresoError = false;
      this.obtenerNombreyApellido(this.dni);
      if(!this.dniError){
        this.visita = {
          dniVisitante: this.dni,
          fechaIngreso: this.fechaIngreso,
          horaIngreso: this.horaIngreso,
          personaVisitada: this.personaAVisitar
        }
        
        this.agregadaVisita.emit(this.visita);
      }
    } else {
      this.nroIngresoError = true;
    }

  }
  
}
