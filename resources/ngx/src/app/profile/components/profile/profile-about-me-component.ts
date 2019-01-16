import { Component, Input } from '@angular/core';

@Component({
  selector: 'osg-profile-about-me',
  templateUrl: './profile-about-me.component.html'
})
export class ProfileAboutMeComponent {
  
  @Input() text: string = '';
  @Input() interests: string = 'Norges idrettshöyskole';
  @Input() experience: string = 'Sport performance';
  @Input() profile: string = '';

}
