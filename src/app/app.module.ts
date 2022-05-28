import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngresoVisitantesComponent } from './components/ingreso-visitantes/ingreso-visitantes.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoVisitantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
