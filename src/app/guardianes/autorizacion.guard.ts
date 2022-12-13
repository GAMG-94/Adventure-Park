import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../servicios/comun/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AutorizacionGuard implements CanActivate {

  constructor(
    private servicioLocalStorage: LocalStorageService,
    private router: Router
    ){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.servicioLocalStorage.ObtenerToken();
    if (token == "") {
      this.router.navigate(['/seguridad/login']);
      return false;
    } else {
      return true;
    }
  }
  
}
