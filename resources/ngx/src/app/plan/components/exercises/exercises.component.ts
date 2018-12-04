import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-plan-builder-exercises',
    templateUrl: './exercises.component.html'
})
export class PlanBuilderExercisesComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
