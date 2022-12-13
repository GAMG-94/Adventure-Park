import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { RecuperarPasswordComponent } from './general/recuperar-password/recuperar-password.component';
import { AsignarPasswordComponent } from './general/asignar-password/asignar-password.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearComponent } from './usuarios/crear/crear.component';
import { EditarComponent } from './usuarios/editar/editar.component';
import { ConsultarComponent } from './usuarios/consultar/consultar.component';
import { EliminarComponent } from './usuarios/eliminar/eliminar.component';
import { AtraccionesComponent } from './general/atracciones/atracciones.component';
import { RestaurantesComponent } from './general/restaurantes/restaurantes.component';
import { TicketsComponent } from './general/tickets/tickets.component';
import { RegistroComponent } from './general/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './general/perfil/perfil.component';
import { SalirComponent } from './general/salir/salir.component';
import { NgxCaptchaModule } from 'ngx-captcha';



@NgModule({
  declarations: [
    LoginComponent,
    RecuperarPasswordComponent,
    AsignarPasswordComponent,
    UsuariosComponent,
    CrearComponent,
    EditarComponent,
    ConsultarComponent,
    EliminarComponent,
    AtraccionesComponent,
    RestaurantesComponent,
    TicketsComponent,
    RegistroComponent,
    PerfilComponent,
    SalirComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ]
})
export class SeguridadModule { }
