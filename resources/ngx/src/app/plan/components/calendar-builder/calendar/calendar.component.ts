import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-plan-builder-calendar',
    templateUrl: './calendar.component.html'
})
export class PlanBuilderCalendarComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
