import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProgramDesignerTrainingDayModalComponent } from './training-day-modal/training-day-modal.component';

@Component({
  selector: 'osg-program-designer-training-calendar',
  templateUrl: './training-calendar.component.html'
})
export class ProgramDesignerTrainingCalendarComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  showModal(): void{
    this.bsModalRef = this.modalService.show(
      ProgramDesignerTrainingDayModalComponent,
      {
          class: 'modal-lg',
      }
  );
  }
}
