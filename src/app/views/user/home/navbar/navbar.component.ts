import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userInfo:any={}
  d:any=""
  constructor(public api:ApiService,private router:Router) {

    let token =localStorage.getItem('token')
    if(token){
      this.api.loginFlag=true
      this.d= localStorage.getItem("userName")
   this.userInfo=JSON.parse(this.d)

  }

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
  deleteAccount(){
    this.api.loginFlag=false
    this.api.delete().subscribe(data=>{
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      this.router.navigateByUrl("/")

  })
}
}
