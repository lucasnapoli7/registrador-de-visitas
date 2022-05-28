import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-visitantes',
  templateUrl: './ingreso-visitantes.component.html',
  styleUrls: ['./ingreso-visitantes.component.css']
})
export class IngresoVisitantesComponent implements OnInit {
  name: string = "Lucas Nápoli";
  fechaIngreso: string = "28/05/2022";
  horaIngreso: string = "17:00";
  listaSectores = [];
  listaPersonas = [];

  constructor() { }

  ngOnInit(): void {
  }

}
