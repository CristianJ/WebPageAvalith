import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiciosComponent,
    CaracteristicasComponent,
    OpcionesComponent,
    BeneficiosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
