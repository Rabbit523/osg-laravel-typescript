import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
    selector: 'osg-progression-builder-training-program',
    templateUrl: './training-program.component.html'
})
export class ProgressionBuilderTrainingProgramComponent implements OnInit {
    deltaX: number = 650;
    left: number = 0;
    @ViewChild('trainingProgramWrapper') wrapper: ElementRef;

    @Input() applicationUser: ApplicationUser;

    ngOnInit(): void {

    }


    moveLeft(): void {
        if(this.left > -this.deltaX*6){
            this.left -= this.deltaX;
            this.move();
        }
    }

    moveRight(): void {
        if (this.left < 0) {
            this.left += this.deltaX;
            this.move();
        }

    }

    move(): void {
        this.wrapper.nativeElement.style = `left: ${this.left}px`;
    }

}
