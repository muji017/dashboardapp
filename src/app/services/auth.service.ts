import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private userType: string | null = null;
  
  constructor() { }

  isAuthenticated(): boolean {
    this.token = localStorage.getItem('token')
    return this.token !== null;
  }
  isAdmin():boolean{
    this.userType = localStorage.getItem('userType')
    return this.userType == 'Admin'
  }
  isUser():boolean{
    this.userType = localStorage.getItem('userType')
    return this.userType == 'User'
  }
}
