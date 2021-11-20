import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  loginForm = this.formBuilder.group({
    email: [''],
    password: []
  });


  onSubmit(): void {
    console.log('Your order has been submitted', this.loginForm.value);
  }

}
