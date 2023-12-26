import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent {
  toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  userData={
    name:"",
    email:"",
    password:"",
    ConfirmPassword:""
    }
  constructor(private api : ApiService,private router: Router) {

  }

  ngOnInit(): void {
  }

  AddUser(data:NgForm){
    this.api.register(this.userData).subscribe(res=>{
      if (res.apiStatus) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName', JSON.stringify(res.data.user));
        this.api.loginFlag = true;
        if (res.data.isAdmin) {
          this.router.navigateByUrl('/dashboard/home');
        } else {
          this.router.navigateByUrl('/user/home');
        }
      }
    },(err)=>{
      console.log(err)

    })
    }
}
