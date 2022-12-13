import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionGuard } from 'src/app/guardianes/autorizacion.guard';
import { ConsultarComponent } from '../seguridad/usuarios/consultar/consultar.component';
import { CrearComponent } from '../seguridad/usuarios/crear/crear.component';
import { EditarComponent } from '../seguridad/usuarios/editar/editar.component';
import { EliminarComponent } from '../seguridad/usuarios/eliminar/eliminar.component';

const routes: Routes = [
  {
    path: "consultar",
    component: ConsultarComponent
  },
  {
    path:"crear",
    component: CrearComponent,
    canActivate:[AutorizacionGuard]
  },
  {
    path:"eliminar/:id",
    component:EliminarComponent
  },
  {
    path:"editar",
    component:EditarComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
