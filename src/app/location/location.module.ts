import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocationComponent } from "./location.component";
import { AgmCoreModule} from "@agm/core";
import { environment } from './../../environments/environment';


const apiURL = environment.apiKey;
const routes:Routes=[
    {path:'',component:LocationComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LocaionRouterModule{};

@NgModule({
    declarations:[LocationComponent],
    //imports:[CommonModule,LocaionRouterModule]
    imports:[CommonModule,AgmCoreModule.forRoot({apiKey:apiURL}),LocaionRouterModule],
    
})
export class LocaionModule{};
