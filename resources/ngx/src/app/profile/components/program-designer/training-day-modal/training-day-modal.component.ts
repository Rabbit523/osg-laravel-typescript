import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'osg-program-designer-training-day-modal',
  templateUrl: './training-day-modal.component.html',
})

export class ProgramDesignerTrainingDayModalComponent {


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
