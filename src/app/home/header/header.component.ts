import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { GlobalService } from 'src/app/services/global.service';
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
  constructor(public global:GlobalService,private router:Router) {
    this.dh = localStorage.getItem('access_token');
    (this.dh) ? this.loginFlag= true:this.loginFlag=false
  }

  ngOnInit(): void {

   }
   handleLogout(){
    this.global.Logout().subscribe(data=>{
      localStorage.removeItem('access_token')
      this.router.navigateByUrl("Login")

    })

  }
}
