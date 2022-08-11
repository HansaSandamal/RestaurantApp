import { Component, OnInit } from '@angular/core';

interface itemDetails{
  itemName:String
}
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})


export class DeliveryComponent implements OnInit {
  items:itemDetails[] = [
    {
      itemName:'mango'
    },
    {
      itemName:'apple'
    },
    {
      itemName:'orange'
    },
    {
      itemName:'grapes'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
