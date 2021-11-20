import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  logar(usuario: any) {

    return this.http.post('http://localhost:8080/users/login', usuario);

  }

  token(email: string) {

    return this.http.post('http://localhost:8080/users/token', {email});

  }

  validateToken(email: string, token: number) {

    return this.http.post('http://localhost:8080/users/token/validate', {email, token});

  }
}
