import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modulos/seguridad/general/registro/registro.component';
import { ErrorComponent } from './public/error/error.component';
import { IndexComponent } from './public/index/index.component';

const routes: Routes = [
  {
    path:"inicio",
    component:IndexComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"
  },
  {
    path:"registro",
    component:RegistroComponent,
  },
  {
    path:"seguridad",
    loadChildren:()=> import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
