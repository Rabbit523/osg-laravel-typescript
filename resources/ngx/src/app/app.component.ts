import { Component } from '@angular/core';
import { ApplicationService } from './core/services/application.service';

@Component({
  selector: 'optimal-strength-gains',
  templateUrl: './app.component.html'
})
export class AppComponent {

    loaded: boolean = false;
    constructor(private readonly applicationService: ApplicationService){}

    async ngOnInit(){
      await this.applicationService.authenticatedUser.toPromise();
      this.loaded = true;
    }
}
