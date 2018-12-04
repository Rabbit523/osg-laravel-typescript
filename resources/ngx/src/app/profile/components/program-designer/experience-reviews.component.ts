import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer-experience-reviews',
  templateUrl: './experience-reviews.component.html'
})
export class ProgramDesignerExperienceReviewsComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
