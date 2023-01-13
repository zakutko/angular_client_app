import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password-validators';
import { UsernameValidators } from '../common/validators/username-validators';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      UsernameValidators.cannotContainSpace
    ],
    [UsernameValidators.shouldBeUnique]
    ),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(10), 
      PasswordValidators.cannotContainSpace, 
      PasswordValidators.passwordShouldHaveNumbers,
      PasswordValidators.passwordShouldHaveCapitalCase,
      PasswordValidators.passwordShouldHaveSpecialCharacter
    ]),
    displayName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  get displayName() {
    return this.form.get('displayName');
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  register() {
    
  }
}
