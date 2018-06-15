import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MapaComponent } from './mapa.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAl66v8x_iTKh0Ch43u22HvBHsD90H8lpQ'
    })
  ],
  declarations: [ MapaComponent, HelloComponent ],
  bootstrap:    [ MapaComponent ]
})
export class AppModule { }
