import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodComponent } from "./food.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes:Routes=[
    {path:'',component:FoodComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FoodRoutingModule{}

@NgModule({
    declarations:[FoodComponent],
    imports:[CommonModule,FoodRoutingModule,MatToolbarModule,MatCardModule,MatButtonModule]
})
export class FoodModule{};