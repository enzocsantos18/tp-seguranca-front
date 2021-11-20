import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
})
export class TokenComponent  {

  @Output() tokenEvent = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
  ) {}


  tokenForm = this.formBuilder.group({
    token: [''],
  });


  onSubmit(): void {
    this.tokenEvent.emit(this.tokenForm.value)
  }
}
