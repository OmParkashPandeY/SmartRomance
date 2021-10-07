import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  //---------------------------------------------------------------------------------

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  get email() { return this.loginForm.get('usersname') }
  get password() { return this.loginForm.get('password') }


  //---------------------------------------------------------------------------------
  login() {
    console.log(this.loginForm.value);
    var _payload = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
    }
    localStorage.setItem('isUserLoggedIn', '1');
    localStorage.setItem('usersDetails', JSON.stringify(_payload));
    this._router.navigateByUrl('/main');
  }
  //---------------------------------------------------------------------------------
}