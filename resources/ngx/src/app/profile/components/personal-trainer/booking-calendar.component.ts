import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PersonalTrainerBookingDetailsModalComponent } from './booking-details-modal/booking-details-modal.component';

@Component({
  selector: 'osg-personal-trainer-booking-calendar',
  templateUrl: './booking-calendar.component.html'
})
export class PersonalTrainerBookingCalendarComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  showModal(): void{
    this.bsModalRef = this.modalService.show(
      PersonalTrainerBookingDetailsModalComponent,
      {
          class: 'modal-lg',
      }
  );
  }

}
