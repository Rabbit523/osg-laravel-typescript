import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer-program-design',
  templateUrl: './program-design.component.html'
})
export class ProgramDesignerProgramDesignComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
