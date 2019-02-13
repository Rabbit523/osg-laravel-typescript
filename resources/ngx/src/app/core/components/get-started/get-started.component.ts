import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-get-started',
  templateUrl: './get-started.component.html'
})
export class GetStartedComponent implements OnInit {

  @HostBinding('class') css: string = 'primary';

  @Input() set view(v: string) {
    // supports: primary, secondary, tertiary
    this.css = v ? v : 'primary';
  }

  @Input() sections: string[] = [];

  ngOnInit(): void {

  }

}
