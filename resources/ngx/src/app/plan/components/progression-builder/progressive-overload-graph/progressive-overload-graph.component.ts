import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import * as c3 from 'c3';

@Component({
    selector: 'osg-progression-builder-progressive-overload-graph',
    templateUrl: './progressive-overload-graph.component.html'
})
export class ProgressionBuilderProgressiveOverloadGraphComponent implements OnInit {

    public static counter: number = 0;
    private _id: number;

    @Input() applicationUser: ApplicationUser;

    constructor() {
        this._id = ++ProgressionBuilderProgressiveOverloadGraphComponent.counter;
    }

    ngOnInit(): void {

    }


    ngAfterViewInit(): void {
        var chart = c3.generate({
            bindto: `#${this.progressiveOverloadGraphId}`,
            size: {
                height: 300
            },
            legend: {
                show: false
            },

            transition: {
                duration: 1000
            },
            data: {
                x: 'x',
                colors: {
                    data1: '#94C4F4',
                    data2: '#EF8683',
                    data3: '#C3E594',
                    data4: '#6FAB32'
                },
                columns: [
                    ['x', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'],
                    ['data1', 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
                    ['data2', 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6],
                    ['data3', 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6],
                    ['data4', 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0],
                ],
                axes: {
                    data1: 'y',
                    data2: 'y',
                    data3: 'y',
                    data4: 'y'
                },
                types:{
                    data4: 'bar'
                }

                // labels: {
                //     format: (v, id, i, j) => { 
                //         return 'Mon'
                //      }
                //     // it's possible to set for each data
                //     //format: {
                //     //    data1: function (v, id, i, j) { ... },
                //     //    ...
                //     //}
                //   }
                // types: {
                //     data1: 'area',
                //     data2: 'area',
                //     data3: 'area'
                // }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        culling: false,
                        rotate: 90,
                        format: (x: Date): string => {
                            let s = `${x.getFullYear()}-01-01`;
                            let v = ['2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01', '2024-01-01', '2025-01-01', '2026-01-01', '2027-01-01', '2028-01-01', '2029-01-01', '2030-01-01', '2031-01-01', '2032-01-01', '2033-01-01', '2034-01-01'];
                            let l = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            let idx = v.indexOf(s);
                            return l[idx];
                        },
                    },
                    height: 50
                },
                y: {
                    min: 0,
                    max: 5,
                    tick:{
                        outer: true,
                        format: (d): string =>{
                            return '';
                        }
                    }
                }
            },
            grid: {
                x: {
                  lines: [
                    {value: '2006-01-01', text: ''},
                    {value: '2013-01-01', text: '', class: 'label-5'},
                    {value: '2020-01-01', text: '', position: 'start'},
                    {value: '2027-01-01', text: '', position: 'start'}
                  ]
                }
              }
        });
    }


    get progressiveOverloadGraphId(): string {
        return `performance-graph-${this._id}`;
    }

}
