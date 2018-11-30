import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer-program-filter',
  templateUrl: './program-filter.component.html'
})
export class ProgramDesignerProgramFilterComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
