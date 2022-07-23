import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

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
    imports:[CommonModule,LoginRoutingMoudle,MatToolbarModule,MatInputModule,MatButtonModule,ReactiveFormsModule]

})
export class LoginModule{}