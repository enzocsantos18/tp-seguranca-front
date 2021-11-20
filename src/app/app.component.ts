import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'two-factor-frontend';

  constructor(private userService: UserService) {}

  email = '';
  hideCadastro = true;
  hideLogin = false;
  hideLogado = true;
  hideToken = true;

  ativaCadastrar() {
    this.hideCadastro = false;
    this.hideLogin = true;
    this.hideLogado = true;
    this.hideToken = true;
  }
  ativaToken() {
    this.hideCadastro = true;
    this.hideLogin = true;
    this.hideLogado = true;
    this.hideToken = false;
  }
  ativaLogado() {
    this.hideCadastro = true;
    this.hideLogin = true;
    this.hideLogado = false;
    this.hideToken = true;
  }

  ativaLogin() {
    this.hideCadastro = true;
    this.hideLogin = false;
    this.hideLogado = true;
    this.hideToken = true;
  }


  login(usuario: any) {

    this.userService.logar(usuario).subscribe((res) => {
      this.userService.token(usuario.email).subscribe(res => {
        this.ativaToken();
        this.email = usuario.email;
      }, err => {
        this.ativaLogin();

        alert("Erro ao gerar token, tente logar novamente")

      })
    }, (err) => {
      alert("Usuário e/ou senha inválidos")
    })

  }
  adicionarUsuario(usuario: any) {

    this.userService.cadastro(usuario).subscribe((res) => {
      this.ativaLogin();
  }, (err) => {alert("Erro ao cadastrar verifique se seu email é valido e já não exista uma conta cadastrada e se sua senha tem mais de 4 caracteres")})}



  token(valor: any) {

    const {token} = valor;

    this.userService.validateToken(this.email,token).subscribe((res) => {
      this.ativaLogado();
  }, (err) => {alert("Erro ao validar token")})}
}
