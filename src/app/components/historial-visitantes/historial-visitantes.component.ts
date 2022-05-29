import { Component, OnInit } from '@angular/core';
import { Visita } from 'src/app/models/visita.model';
import { VisitasService } from 'src/app/services/visitas.service';

@Component({
  selector: 'app-historial-visitantes',
  templateUrl: './historial-visitantes.component.html',
  styleUrls: ['./historial-visitantes.component.css']
})
export class HistorialVisitantesComponent implements OnInit {
  listaVisitasPorPersona: Visita[] = []
  visitaAEliminar: Visita = {
    dniVisitante: "",
    fechaIngreso: "",
    horaIngreso: "",
    personaVisitada: ""
  };

  constructor(private visitasService:VisitasService) { }

  ngOnInit(): void {
  }
  
  mostrarHistorial(dni:string){
    this.listaVisitasPorPersona= this.visitasService.obtenerVisitasPorDni(dni);
  }

  agregarVisita(visita: Visita){
    this.visitasService.crearVisita(visita);
    this.mostrarHistorial(visita.dniVisitante);
  }
  
  modalEliminar(visita: Visita){
    this.visitaAEliminar = visita;
  }

  eliminarVisita(){
    let visita = this.visitaAEliminar;
    this.visitasService.eliminarVisita(visita);
    this.mostrarHistorial(visita.dniVisitante);
  }




}
