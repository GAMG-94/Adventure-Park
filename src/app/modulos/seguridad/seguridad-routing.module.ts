import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './general/login/login.component';
import { ErrorComponent } from 'src/app/public/error/error.component';
import { RegistroComponent } from './general/registro/registro.component';
import { RecuperarPasswordComponent } from './general/recuperar-password/recuperar-password.component';
import { AtraccionesComponent } from './general/atracciones/atracciones.component';
import { RestaurantesComponent } from './general/restaurantes/restaurantes.component';
import { TicketsComponent } from './general/tickets/tickets.component';
import { PerfilComponent } from './general/perfil/perfil.component';
import { SalirComponent } from './general/salir/salir.component';
import { DesautorizarGuard } from 'src/app/guardianes/desautorizar.guard';
import { AdministracionComponent } from '../parametros/administracion/administracion.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registro",
    component:RegistroComponent,
    canActivate: [DesautorizarGuard]
  },
  {
    path:"atracciones",
    component:AtraccionesComponent
  },
  {
    path:"restaurantes",
    component:RestaurantesComponent
  },   
  {
    path:"perfil",
    component:PerfilComponent
  },
  {
    path:"tickets",
    component:TicketsComponent
  },
  {
    path:"recuperar",
    component: RecuperarPasswordComponent
  },
  {
    path: "salir",
    component: SalirComponent
  },
  {
    path:"administracion",
    component: AdministracionComponent
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
