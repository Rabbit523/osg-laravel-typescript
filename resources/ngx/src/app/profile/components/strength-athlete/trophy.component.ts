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
  @Input() title: string;
  @Input() gaugeCss: string;

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
          max: 5,
          tick: {
            outer: true,
            format: (d): string => {
              return '';
            }
          }
        },
        y2: {
          show: true,
          tick: {
            format: (d): string => {
              console.log(d)
              let v = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
              let labels = ['Time', '', 'Untrained', '', 'Novice', '', 'Intermediate', '', 'Advanced', '', 'Elite'];
              let idx = v.indexOf(d);
              return labels[idx];
            }
          }
        },
        x: {
          
          tick: {
            format: (d): string => {
              return '';
            }
          }
        }
      },
      transition: {
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
          ['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          ['data1', 1, 1.2, null, null, null, null, null, null, null, null, null],
          ['data2', null, null, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, null, null],
          ['data3', null, null, null, null, null, null, null, null, null, 2.1, 2.5]
        ],
        types: {
          data1: 'area',
          data2: 'area',
          data3: 'area'
        }
      },
      grid: {
        x: {
          lines: [
            { value: 1.5, text: '' },
            { value: 8.5, text: '' }
          ]
        },
        y: {
          lines: [
            { value: 1, text: '' },
            { value: 2, text: '', class: 'label-5' },
            { value: 3, text: '', position: 'start' },
            { value: 4, text: '', position: 'start' },
            { value: 5, text: '', position: 'start' }
          ]
        }
      }
    });
  }


  get performanceGraphId(): string {
    return `performance-graph-${this._id}`;
  }

}
