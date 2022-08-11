import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  constructor(private router:Router) { }
  about(){
    this.router.navigate(['about']);
  }
  contact(){
    this.router.navigate(['contact']);
  }
  delivery(){
    this.router.navigate(['delivery']);
  }

}
