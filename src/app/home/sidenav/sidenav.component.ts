import { Component } from '@angular/core';
import {SideNavItem} from '../../models/model'
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  dh:any;
  loginFlag:any
  constructor(public global :GlobalService){
    this.dh = localStorage.getItem('access_token');
    (this.dh) ? this.loginFlag= true:this.loginFlag=false
  }
  sideNavContent:SideNavItem[]=[
    {
      title:'dashboard',
      link :'home/'
    },
    {

      title:'view cars',
      link :'cars/all'
    },
    {
      title:'manage cars',
      link:'cars/maintance'
    },
    {

      title:'manage brands',
      link:'cars/brands'
    },
    {

      title:'return cars',
      link:'cars/return'
    },
    {
      title:'view users',
      link:'users/list'
    },
    {
      title:'all orders',
      link:'orders/all'
    }
  ]
}
