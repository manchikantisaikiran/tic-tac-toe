import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliderToDisplay = '';

  constructor() { }

  ngOnInit(): void {
    if(document.querySelector('.custom')){
      console.log('custom')
      this.sliderToDisplay = 'custom';
    }else if(document.querySelector('.bootstrap')){
      console.log('bootstrap')
      this.sliderToDisplay = 'bootstrap';
    }else{
      console.log('material')
      this.sliderToDisplay = 'material';
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
