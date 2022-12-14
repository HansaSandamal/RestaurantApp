import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


const routes:Routes=[
    {path:'',component:HomeComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingMoudle{}

@NgModule({
    declarations:[HomeComponent],
    imports:[CommonModule,HomeRoutingMoudle,MatToolbarModule,MatCardModule],
})
export class HomeModule{}