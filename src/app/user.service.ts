import { environment } from './../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  logar(usuario: any) {

    return this.http.post(this.baseUrl + 'users/login', usuario);

  }

  token(email: string) {

    return this.http.post(this.baseUrl + 'users/token', {email});

  }

  cadastro(usuario:any) {
    return this.http.post(this.baseUrl + 'users/register', usuario);

  }

  validateToken(email: string, token: number) {

    return this.http.post(this.baseUrl + 'users/token/validate', {email, token});
  }
}
