import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {


  @Output() cadastroEvent = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  cadastroForm = this.formBuilder.group({
    email: [''],
    password: []
  });


  onSubmit(): void {
    this.cadastroEvent.emit(this.cadastroForm.value);
  }

}
