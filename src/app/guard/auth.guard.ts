import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}

export const authGuardIsLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.isAuthenticated(),"fcrfcrfcewc")
  if (!authService.isAuthenticated()) {
    console.log("no token")
    return true;
  } else {
    const isAdmin=authService.isAdmin()
    const isUser=authService.isUser()
    if(isAdmin){
      router.navigate(['/admin']);
    } 
    else if(isUser){
      router.navigate(['/user']);
    }
    return false;
  }
};

