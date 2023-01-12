import { Component } from '@angular/core';

@Component({
  templateUrl: './random-number.component.html',
})
export class RadmonNumberComponent {
  randomNumber:number = 1000;
  constructor() {}

  ngOnInit() {
    console.log('Component A Initialized');
    // this.refreshRandomNumber();
  }
  refreshRandomNumber(){
    this.randomNumber = Math.random() * 10000;
  }

  ngOnDestroy() {
    console.log('Component A Destroyed');
  }
}
