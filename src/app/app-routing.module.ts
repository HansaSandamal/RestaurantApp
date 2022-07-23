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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
