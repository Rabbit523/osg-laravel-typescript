import { Component, Input } from '@angular/core';
import { ApplicationUser } from '../../classes/user';
import { MockDataService } from '../../services/mock-data.service';
import { INewsFeed } from '../../classes/newsfeed';

@Component({
  selector: 'osg-news-feed',
  templateUrl: './news-feed.component.html'
})
export class NewsFeedComponent {
  @Input() applicationUser: ApplicationUser;
  feed: INewsFeed = {
    posts: []
  };
  constructor(private readonly dataService: MockDataService) { }

  ngOnInit() {
    this.feed = this.dataService.getNewsFeed(this.applicationUser);
  }
}
