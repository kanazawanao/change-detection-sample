import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {
  _time;
  get time() {
    return this._time;
  }

  constructor(zone: NgZone) {
    this._time = Date.now();

    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now()
      }, 1);
    });
  }
  ngOnInit() {
  }

}
