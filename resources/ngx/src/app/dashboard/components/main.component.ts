import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'osg-dashboard',
  templateUrl: './main.component.html'
})
export class DashboardComponent implements OnInit{
  
  constructor(private readonly router: Router){}

  ngOnInit(): void {
    this.router.navigate(['/profile']);
  }

}
