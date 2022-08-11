
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapTypeControlOptions, ControlPosition } from '@agm/core';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
    
  }
  mapTypeControlOptions: MapTypeControlOptions = {
    position: ControlPosition.LEFT_BOTTOM
  };

}
