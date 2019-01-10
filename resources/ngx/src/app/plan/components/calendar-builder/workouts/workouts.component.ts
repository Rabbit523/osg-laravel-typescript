import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-plan-builder-workout',
    templateUrl: './workouts.component.html'
})
export class PlanBuilderWorkoutsComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
