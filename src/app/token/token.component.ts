import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
})
export class TokenComponent  {

  constructor(
    private formBuilder: FormBuilder,
  ) {}


  tokenForm = this.formBuilder.group({
    token: [''],
  });


  onSubmit(): void {
    console.log('Your order has been submitted', this.tokenForm.value);
  }
}
