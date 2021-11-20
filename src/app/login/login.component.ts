import { FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  @Output() loginEvent = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
  ) {}


  loginForm = this.formBuilder.group({
    email: [''],
    password: []
  });


  onSubmit(): void {
    this.loginEvent.emit(this.loginForm.value)
  }

}
