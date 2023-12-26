import { ControlModule } from './src/app/views/admin/admin/control.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './src/app/layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './src/app/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './src/app/layouts/user-layout/user-layout.component';
import { DetailsComponent } from 'src/app/views/user/home/details/details.component';

const routes: Routes = [
{path:'',component:FrontLayoutComponent
,
children:[
  {path:'',loadChildren:()=>import('./src/app/views/dashboard/dashboard.module').then(m=>m.DashboardModule)},

]

},
{path:'dashboard',component:AdminLayoutComponent,
children:[
  {path:'home',loadChildren:()=>import('./src/app/views/admin/admin/control.module').then(m=>m.ControlModule)},

]

},

{
  path:'user',component:UserLayoutComponent,
  children:[
    // {path:'login',loadChildren:()=>import('./views/user/login/login.module').then(m=>m.LoginModule)},
    {path:'home',loadChildren:()=>import('./src/app/views/user/home/main.module').then(m=>m.MainModule)},
    // {path:'register',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule)}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
