import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelLogin, ResponseModelLogin, signupModel } from '../models/user.model';
import { environment } from 'src/environments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private userType: string | null = null;
  
  constructor(private http:HttpClient) { }

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

  login(loginData:ModelLogin):Observable<ResponseModelLogin>{
    return this.http.post<ResponseModelLogin>(`${environment.apiUrl}/api/login`,loginData);
  }
  signUp(signUpData:signupModel):Observable<ResponseModelLogin>{
    return this.http.post<ResponseModelLogin>(`${environment.apiUrl}/api/signup`,signUpData);
  }
}
