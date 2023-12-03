import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginScreen = true;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( 
    private router: Router) {
  }

  login() {
    this.router.navigate(['home']);    
  }

  register() {
    this.switchScreen();
  }

  switchScreen(){
    this.loginScreen = !this.loginScreen;
    if(this.loginScreen){
      this.form = new FormGroup({
        name: new FormControl(''),
        surname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
      });
      this.form.markAsPristine()
    }
    else{
      this.form = new FormGroup({
        name: new FormControl('',[Validators.required]),
        surname: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)]),
        password: new FormControl('',[Validators.required]),
      });
      this.form.markAsPristine()
    }
  }
}
