import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-progression-builder-progressive-overload-graph',
    templateUrl: './progressive-overload-graph.component.html'
})
export class ProgressionBuilderProgressiveOverloadGraphComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
