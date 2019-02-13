import { Component, Input } from '@angular/core';

@Component({
  selector: 'osg-profile-about-me',
  templateUrl: './profile-about-me.component.html'
})
export class ProfileAboutMeComponent {
  
  @Input() text: string = '';
  @Input() interests: string = '';
  @Input() education: string = '';
  @Input() specialities: string = '';
  @Input() experience: string = '';
  @Input() country: string = '';
  @Input() location: string = '';
  @Input() profile: string = '';

}