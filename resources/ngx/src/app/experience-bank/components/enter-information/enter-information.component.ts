import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-experience-bank-enter-information',
  templateUrl: './enter-information.component.html'
})
export class ExperienceBankEnterInformation implements OnInit{
  
  @Input() title: string = '';

  ngOnInit(): void {
    
  }

}
