import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password-validators';
import { UsernameValidators } from '../common/validators/username-validators';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
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
    ])
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    
  }
}
