import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isLoggedIn() {
    if (localStorage.getItem('token') === null) {
      return false;
    }
    else {
      return true;
    }
  }
}
