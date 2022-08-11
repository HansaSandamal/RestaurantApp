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
      title: "Menu",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },  
    {
      title: "Contact Us",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },  
    {
      title: "Delivary",
      link:"onDelivery()",
      url:"/assets/logo.jpg",
    },
    {
      title: "Hours & Location",
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
      case 'Menu':{
        this.router.navigate(['food']);
        break;
      }
      case 'Contact Us':{
        this.router.navigate(['contact']);
        break;
      }
      case 'Hours & Location':{
        this.router.navigate(['location']);
        break;
      }
    }
    
  }

}
