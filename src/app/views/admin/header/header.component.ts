import { ApiService } from './../../../api.service';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  userData:any={
  }
  @Output() menuClicked = new EventEmitter<boolean>();
  titlecase='User';
  loadingImg=true;
  loginFlag:any
  dh:any
  vjv:any
  f:any
  constructor(public api:ApiService,private router:Router) {
    this.dh = localStorage.getItem('access_token');
    this.f=localStorage.getItem('userName')
    this.vjv = JSON.parse(this.f);

    (this.dh) ? this.loginFlag= true:this.loginFlag=false
  }

  ngOnInit(): void {

   }
   handleLogout(){
    this.api.loginFlag=false
    this.api.Logout().subscribe(data=>{
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      this.router.navigateByUrl("/")

    })

  }
}
