import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Search } from 'src/app/search';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  countries:any =[]
  cities:any=[]
  search:Search={
    startDate:"",
    endDate:"",
    country:"",
    city:""
  }

  constructor(public api:ApiService,private router:Router){

      this.api.GetallCountries().subscribe(country=>{
        for(let i = 0;i<30;i++){
        this.countries.push(country.data[i])
      }
      })
this.api.GetallCities().subscribe(city=>{
  for(let j = 0;j<30;j++){
    this.cities.push(city.data[j])

  }
})
}


searchHandle(data:NgForm){
  this.api.search(this.search).subscribe(res=>{
console.log(this.search)
    localStorage.setItem("SearchDetailed",JSON.stringify(res.data))
    this.router.navigateByUrl('/user/home/getallCars')

  },(err)=>{
  },()=>{

  })

  }


  ngOnInit(): void {}
}
