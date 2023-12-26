import { ApiService } from 'src/app/api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  Login: any = {
    email: '',
    password: '',
  };
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {}
  LoginHandle(data: NgForm) {
    this.api.Login(this.Login).subscribe(
      (res) => {
        if (res.apiStatus) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userName', JSON.stringify(res.data));
          this.api.loginFlag = true;
          if (res.data.isAdmin) {
            this.router.navigateByUrl('/dashboard/home');
          } else {
            this.router.navigateByUrl('/user/home');
          }
        }
      },
      () => {}
    );
  }
}
