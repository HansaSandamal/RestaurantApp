import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";

const routes:Routes=[
    {path:'',component:AboutComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingMoudle{}

@NgModule({
    declarations:[AboutComponent],
    imports:[CommonModule,AboutRoutingMoudle],
})
export class AboutModule{}