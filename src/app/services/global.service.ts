import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public urlPath = 'http://localhost:4000/';
  public userInfo: any = {};
  dh: any = {};
  constructor(private http: HttpClient,private jwt :JwtHelperService, private router: Router) {
    this.dh = localStorage.getItem('access_token')
    this.userInfo = JSON.parse(this.dh)
if(this.userInfo == null ){
  this.userInfo = {}
}
  }
  Login(obj: any): Observable<any> {
    return this.http.post(`${this.urlPath}user/login`, obj);
  }
  register(obj: any): Observable<any> {
    return this.http.post(`${this.urlPath}user/register`, obj);
  }
  authMe(): Observable<any> {
    return this.http.get(`${this.urlPath}user/profile`);
  }
  Logout(): Observable<any> {
    return this.http.get(`${this.urlPath}user/logout`);
  }
isLoggedIn():boolean{
  return !!localStorage.getItem('access_token');
}
  saveToken(Data:string,token:string){
  localStorage.setItem('access_token',token)
  localStorage.setItem('userData',Data)

}

deleteToken(){
  localStorage.removeItem('access_token');
  location.reload();
}
// getTokenUserInfo():User | null {
//   if(!this.isLoggedIn()) return null;
//   let token = this.jwt.decodeToken();
//   let user:User={
//     email:token.email,
//     name:token.name,
//     id:token.id,
//     password:'',
//     isAdmin:token.isAdmin

//   }
//   return user;
// }
}
