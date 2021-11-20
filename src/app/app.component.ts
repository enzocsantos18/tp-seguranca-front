import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'two-factor-frontend';

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
