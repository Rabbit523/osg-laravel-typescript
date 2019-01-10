import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-strength-standards-enter-information',
  templateUrl: './enter-information.component.html'
})
export class StrengthStandardsEnterInformation implements OnInit{
  
  @Input() title: string = '';

  ngOnInit(): void {
    
  }

}
