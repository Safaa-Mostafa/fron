import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Toast } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  hide = true;
  responseMsg: string = '';
  LoginForm!: FormGroup;
userData:any
loginFlag:any
constructor(private fb: FormBuilder,private router: Router,public global: GlobalService    ) {

  this.LoginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
    });
  }
  Login() {
    let loginInfo = {
      email:this.LoginForm.get('email')?.value,
      password:this.LoginForm.get('password')?.value,
    };
this.global.Login(loginInfo).subscribe(res=>{
  console.log(res)

if(!res.apiStatus){
  this.responseMsg='Invalid Credentials'
}else if(res.data.isAdmin){
  this.responseMsg='';
  this.loginFlag=true;
  this.global.saveToken(JSON.stringify(res.data),JSON.stringify(res.data.token));
  this.router.navigateByUrl('dashboard/home');

}
error:(err:any)=>{
  console.log('Error: ');
  console.log(err);
}

})

  }

  getEmailErrors() {
    if (this.email.hasError('required')) return 'Email is required!';
    if (this.email.hasError('email')) return 'Email is invalid';
    return '';
  }

  getPasswordErrors() {
    if (this.password.hasError('required')) return 'password is required!';
    return '';
  }
  get email(): FormControl {
    return this.LoginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.LoginForm.get('password') as FormControl;
  }
}
