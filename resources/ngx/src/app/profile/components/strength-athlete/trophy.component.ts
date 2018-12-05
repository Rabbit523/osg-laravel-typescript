import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import * as c3 from 'c3';

@Component({
  selector: 'osg-strength-athlete-trophy',
  templateUrl: './trophy.component.html'
})
export class StrengthAthleteTrophyComponent implements OnInit {
  public static counter: number = 0;

  private _id: number;
  @Input() applicationUser: ApplicationUser;

  constructor() {
    this._id = ++StrengthAthleteTrophyComponent.counter;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    var chart = c3.generate({
      bindto: `#${this.performanceGraphId}`,
      size: {
        height: 300
      },
      legend: {
        show: false
      },
      axis: {
        y: {
          max: 5
        },
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      },
      transition:{
        duration: 1000
      },
      data: {
        x: 'x',
        colors: {
          data1: '#F3A83B',
          data2: '#F3A83B',
          data3: '#F3A83B'
        },
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-06', '2013-01-07', '2013-01-08'],
          ['data1', 1, 1.2],
          ['data2', null, null, 1.3, 2.1],
          ['data3', null, null, null, null, 2.4, 3.3]
        ],
        types: {
          data1: 'area',
          data2: 'area',
          data3: 'area'
        }
      }
    });
  }


  get performanceGraphId(): string {
    return `performance-graph-${this._id}`;
  }

}
