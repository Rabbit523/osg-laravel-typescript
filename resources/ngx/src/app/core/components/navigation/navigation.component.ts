import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'osg-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit{
  
  user: any;
  @ViewChild('logoutForm') logoutForm : ElementRef;
  constructor(private readonly applicationService: ApplicationService, private readonly meta: Meta){}

  async ngOnInit(){
    this.user = await this.applicationService.authenticatedUser.toPromise();
  }

  get fullName(){
    return this.user !== undefined ? this.user.name : '';
  }

  get csrf(){
    return this.meta.getTag('name=csrf-token').content;
  }

  logout(){
    this.logoutForm.nativeElement.submit();
  }
}
