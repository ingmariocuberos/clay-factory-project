import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { CryptoServiceLS } from 'app/utils/cryptojs/crypto.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private cryptoService: CryptoServiceLS
) {}

  canActivateChild(): boolean {
    const logged: boolean = this.userIsLogged();
    if (!logged) {
        console.log('No se puede iniciar sesión')
        this.router.navigate(['/login']);
        return false;
    }

    return true;
  }

  public userIsLogged(): boolean {
    const user: string = this.cryptoService.getData('accessToken');
    return user ? true : false;
  }
}
