import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import {MatToolbarModule} from '@angular/material/toolbar';

const routes:Routes=[
    {path:'',component:LoginComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingMoudle{}

@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,LoginRoutingMoudle]

})
export class LoginModule{}