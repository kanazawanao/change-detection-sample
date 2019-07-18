import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  _time;
  get time() {  return this._time; }

  constructor() {
    this._time = Date.now();
    
    setInterval(() => {
      this._time = Date.now();
    }, 1);
  }

  ngOnInit() {
  }

}
