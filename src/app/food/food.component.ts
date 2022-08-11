import { Component, OnInit } from '@angular/core';
interface CardDetails{
  title:String,
  urlCoverImg:String,
  urlHeaderImg:String,
  subTitle:String,
  details:String
}
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  isShow:boolean=false;
  cards: CardDetails [] = [
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },    
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },    
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },    
    {
      title: "Delivary",
      subTitle:"sub-title",
      details:"details of food",
      urlCoverImg:"/assets/back.jpg",
      urlHeaderImg:"/assets/logo.jpg"
    },    

  ];
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.isShow=!this.isShow;
  }

}
