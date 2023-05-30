import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'edv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public authenticationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.authenticationForm = this.constructForm(formBuilder);
  }

  public login(): void {
    console.log('Form:', this.authenticationForm.value);
  }

  public cleanForm(): void {
    this.authenticationForm.reset();
  }

  private constructForm(builder: FormBuilder): FormGroup {
    return builder.group({
      username: new FormControl<string>(''),
      password: new FormControl<string>(''),
    });
  }
}
