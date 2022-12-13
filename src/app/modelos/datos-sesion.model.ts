import { DatosUserModel } from "./datos-user.model";

export class DatosSesionModel {
    tk?: string;
    usuario?: DatosUserModel;
    isLoggedIn:boolean = false;
}