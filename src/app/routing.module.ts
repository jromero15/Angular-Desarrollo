import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { MapaComponent } from "./componentes/mapa/mapa.component";
import { TablaComponent } from "./componentes/tabla/tabla.component";

const ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'mapa',
        component: MapaComponent
    },
    {
        path: 'registros',
        component: TablaComponent
    },
    {
        path: '**',
        component: DashboardComponent
    },
];

@NgModule({
    imports: [
    RouterModule.forRoot(ROUTES)
    ],
    exports: [
    RouterModule
    ]
    })
    export class RoutingModule { }
    