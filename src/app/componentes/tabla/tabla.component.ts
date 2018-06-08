import { Component, OnInit } from '@angular/core';
import { TablaService } from './tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datosTabla;

  constructor(private tablaService: TablaService) { }

  ngOnInit() {
    this.tablaService.getDatos()
    .subscribe((datos) => {
      this.datosTabla = datos;
    });
  }

}
