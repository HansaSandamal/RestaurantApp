import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CardDetails{
  title:String,
  link:String,
  url:String
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  cards: CardDetails [] = [
    {
      title: "Delivary",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },
    {
      title: "About",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },  
    {
      title: "Foods",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },  
    {
      title: "Delivary",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },  
    {
      title: "Delivary",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },
    {
      title: "Delivary",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },
  ];
  constructor(private router:Router) {
    
   }
   
  ngOnInit(): void {
  }
  
  onNavigate(location:any){
    switch(location){
      case 'Delivary':{
        this.router.navigate(['delivery']);
        break;
      }
      case 'About':{
        this.router.navigate(['about']);
        break;
      }
      case 'Foods':{
        this.router.navigate(['food']);
        break;
      }
      
    }
    
  }

}
