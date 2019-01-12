import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-progression-builder-training-program',
    templateUrl: './training-program.component.html'
})
export class ProgressionBuilderTrainingProgramComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
