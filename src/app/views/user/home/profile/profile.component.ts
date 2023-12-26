import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  Data:any={}
  order:any=[]
  total:any=0
  el:any
  constructor(public global:ApiService) {
      this.global.authMe().subscribe(res=>{
        this.Data=res.data
        this.order=this.Data.orders
        for(let i=0;i<this.order.length;i++){
          this.total += this.order[i].dailyRentalRate
        }
      })



    }

    ngOnInit(): void {
    }

}
