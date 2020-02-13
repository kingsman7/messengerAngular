import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  operation = 'login';
  email: string = null;
  password: string = null;
  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.loginWithEmail(this.email, this.password).then(
      (data) => {
        alert('successfull log');
        console.log(data);
      }
    )
    .catch((error) => {
      alert('error');
      console.error(error);
    });
  }
  register() {
    this.authServices.registerWithEmail(this.email, this.password).then(
      (data) => {
        alert('successfull register');
        console.log(data);
      }
    )
    .catch((error) => {
      alert('error');
      console.error(error);
    });
  }

}
