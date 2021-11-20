import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  cadastroForm = this.formBuilder.group({
    email: [''],
    password: []
  });


  onSubmit(): void {
    console.log('Your order has been submitted', this.cadastroForm.value);
  }

}
