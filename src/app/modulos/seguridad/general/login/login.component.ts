import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredencialesUserModel } from 'src/app/modelos/credenciales-user.model';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';
import { LocalStorageService } from 'src/app/servicios/comun/local-storage.service';
import { SeguridadService } from 'src/app/servicios/comun/seguridad.service';

declare const GenerarVentanaModal: any;
const CryptoJS = require('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioDatos: FormGroup = new FormGroup({});
  siteKey:string = "6LcTURgjAAAAADjgYnFqzA2AI2uE3Ll1bDxcHNq_";

  constructor(

    private fb:FormBuilder,
    private servicioSeguridad: SeguridadService,
    private servicioLocalStorage: LocalStorageService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }

  ConstruccionFormulario(){
    this.formularioDatos=this.fb.group({
      usuario:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]],
      recaptcha:["", [Validators.required]]
    });
  }

  Login(){

    if (this.formularioDatos.controls['usuario'].invalid) {
      GenerarVentanaModal("El Correo No Debe Quedar Vacio.");
    } else if (this.formularioDatos.controls['password'].invalid){
        GenerarVentanaModal("La Contraseña No Es Valida.");    
    } else if (this.formularioDatos.controls['recaptcha'].invalid){
        GenerarVentanaModal("Confirme Que No Es Robot.");    
    } else {
      let credenciales = new CredencialesUserModel();
      credenciales.usuario = this.formularioDatos.controls['usuario'].value;
      credenciales.password = CryptoJS.MD5(this.formularioDatos.controls['password'].value).toString();
      this.servicioSeguridad.Login(credenciales).subscribe({
        next: (datos:DatosSesionModel) => {
          console.log(datos);
          let guardar = this.servicioLocalStorage.GuardarDatosSesion(datos);
          datos.isLoggedIn = true;
          this.servicioSeguridad.ActualizarDatosSesion(datos);
          this.router.navigate(['/inicio']);
        },
        error: (e) => {
          if (e==401) {
            GenerarVentanaModal("Usuario o Contraseñas Incorrectos.")
          }
        }
      });
    }
  }

}
