import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer',
  templateUrl: './program-designer.component.html'
})
export class ProgramDesignerComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
