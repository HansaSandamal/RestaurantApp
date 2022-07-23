import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeliveryComponent } from "./delivery.component";

const routes:Routes=[
    {path:'',component:DeliveryComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeliveryRoutingMoudle{}

@NgModule({
    declarations:[DeliveryComponent],
    imports:[CommonModule,DeliveryRoutingMoudle],
})
export class DeliveryModule{}