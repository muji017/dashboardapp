import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  constructor() { }

  isAuthenticated(): boolean {
    return this.token !== null;
  }
}
