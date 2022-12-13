import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  GuardarDatosSesion(datos:DatosSesionModel):boolean {
    let datosActuales = localStorage.getItem("AdventurePark");
    if (datosActuales) {
      return false;
    } else {
      let datosSesionString = JSON.stringify(datos);
      localStorage.setItem("AdventurePark", datosSesionString);
      return true;
    }
  }

  EliminarDatosSesion():boolean {
    let datosActuales = localStorage.getItem("AdventurePark");
    if (datosActuales) {
      localStorage.removeItem("AdventurePark");
      return true;
    } else {
      return false;
    }
  }

  ObtenerToken():string{
    let datosActuales = localStorage.getItem("AdventurePark");
    if (datosActuales) {
      let datosSesionJson = JSON.parse(datosActuales);
      return datosSesionJson.tk;
    } else {
      return "";
    }
  }

  ObtenerInfoSesion():DatosSesionModel | null {
    let datosActuales = localStorage.getItem("AdventurePark");
    if (datosActuales) {
      let datosSesionJson = JSON.parse(datosActuales);
      return datosSesionJson;
    } else {
      return null;
    }
  }

}
