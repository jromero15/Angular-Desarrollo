import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapaComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
