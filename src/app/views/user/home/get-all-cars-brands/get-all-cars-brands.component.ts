import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-cars-brands',
  templateUrl: './get-all-cars-brands.component.html',
  styleUrls: ['./get-all-cars-brands.component.scss']
})
export class GetAllCarsBrandsComponent {
  Brands:any=[]
  cars:any=[]
  dj:any=[]
  data:Boolean=true

  constructor(public api:ApiService,private router:Router) {
    this.dj = localStorage.getItem("SearchDetailed")
    this.cars=JSON.parse(this.dj)

    if(this.cars.length > 1 && this.cars.length == 1){
      this.data=true

    }else if(this.cars.length == 0){
      this.data=false
    }

    this.api.getAllCategories().subscribe(res=>{
     this.Brands.push(...res.data)


    })




  }

  ngOnInit(): void {


  }
}
