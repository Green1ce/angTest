import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angTest-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public inputValue = '';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  get inputControl(): AbstractControl | null {
    return this.form.get('formInput');
  }

  public submitForm(): void {
    if (this.form.valid) {
      console.log(this.inputControl?.value)
    }
  }

  private createFormGroup(): void {
    this.form = this.fb.group({
      formInput: [
        this.inputValue, {
          validators: [Validators.required]
        }
      ]
    })
  }

}
