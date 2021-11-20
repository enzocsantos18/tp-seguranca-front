import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'two-factor-frontend';

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
    console.log(usuario)

  }
  adicionarUsuario(usuario: any) {
    console.log(usuario)

  }
  token(token: any) {
    console.log(token)

  }
}
