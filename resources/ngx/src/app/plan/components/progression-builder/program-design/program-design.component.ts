import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-progression-builder-program-design',
    templateUrl: './program-design.component.html'
})
export class ProgressionBuilderProgramDesignComponent implements OnInit {

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }

}
