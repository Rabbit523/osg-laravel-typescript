import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'osg-personal-trainer-booking-details-modal',
  templateUrl: './booking-details-modal.component.html',
})

export class PersonalTrainerBookingDetailsModalComponent {


  onClose: EventEmitter<any> = new EventEmitter();
  onComplete: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly bsModalRef: BsModalRef
  ) { }

  async ngOnInit() {
    
  }


  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }

}
