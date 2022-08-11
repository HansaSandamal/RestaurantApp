import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'login', component: LoginComponent },
  {
    path:'home',
    loadChildren: () =>
      import('./home/home.module').then((file) => file.HomeModule),
  },
  {
    path:'',
    loadChildren: () =>
      import('./login/login.module').then((file) => file.LoginModule),
  },
  {
    path:'delivery',
    loadChildren: () =>
      import('./delivery/delivery.module').then((file) => file.DeliveryModule),
  },
  {
    path:'about',
    loadChildren:()=>
      import('./about/about.module').then((file)=>file.AboutModule),
  },
  {
    path:'register',
    loadChildren:()=>
      import('./register/register.module').then((file)=>file.RegisterModule)
  },
  {
    path:'food',
    loadChildren:()=>
      import('./food/food.module').then((file)=>file.FoodModule)
  },
  {
    path:'contact',
    loadChildren:()=>
      import('./contact/contact.module').then((file)=>file.ContactModule)
  },
  {
    path:'location',
    loadChildren:()=>
      import('./location/location.module').then((file)=>file.LocaionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
