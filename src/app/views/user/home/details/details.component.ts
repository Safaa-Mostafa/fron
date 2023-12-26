import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  carId:any
  car:any={}
  user:any={}

  userData:any={}
  token:any={}
    constructor(public api:ApiService,private activated: ActivatedRoute,private router:Router) {

      this.carId = this.activated.snapshot.paramMap.get("id")

      this.api.SingleCar(this.carId).subscribe(res=>{
        this.car = res.data
        if(this.car.airConditioner ) this.car.airConditioner="airConditioner"
        this.api.GetUser(this.car.userId).subscribe(res=>{
         this.userData=res.data
        })
      })

  }
    ngOnInit(): void {

      this.token = localStorage.getItem("token");
    }
      orderData(){
        this.user = localStorage.getItem("userName")
      this.user = JSON.parse(this.user)
      let d=confirm("You are sure you want to rent")
      if(d){
        this.api.order(this.user._id,this.car).subscribe(res=>{
          this.router.navigateByUrl('/user/home/profile');
         })
        }else{
          this.router.navigateByUrl('/user/home/cars');
    
        }
      }
}
