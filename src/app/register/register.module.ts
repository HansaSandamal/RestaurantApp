import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register.component";

const routes:Routes=[
    {path:'',component:RegisterComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RegisterRoutingModule{}

@NgModule({
    declarations:[RegisterComponent],
    imports:[CommonModule,RegisterRoutingModule,MatInputModule,MatButtonModule,ReactiveFormsModule,MatIconModule]
})

export class RegisterModule{}