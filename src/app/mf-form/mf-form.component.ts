import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

function cscValidator(c: AbstractControl) {
  const { value } = c;
  if (value == '' || value == null) {
    return {
      required: 'CSC is required'
    };
  }
  if (value.toString().length !== 3) {
    return {
      length: 'CSC length must be 3'
    };
  }
  if (!Number.isInteger(+value)) {
    return {
      integer: 'CSC must be 3 number'
    };
  }  return null;
}


@Component({
  selector: 'ptt-mf-form',
  templateUrl: './mf-form.component.html',
  styleUrls: ['./mf-form.component.scss']
})
export class MfFormComponent implements OnInit {

  mf: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mf = this.fb.group({
      cardNumber: ['', Validators.required],
      csc: ['', cscValidator],
    });
  }

  onSubmit() {
    console.log(this.mf.value);
  }

}
