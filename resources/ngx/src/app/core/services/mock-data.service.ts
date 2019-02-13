import { Injectable } from '@angular/core';
import { INewsFeed } from '../classes/newsfeed';
import { ApplicationUser, ApplicationUserRole } from '../classes/user';

@Injectable()
export class MockDataService {
    
    getNewsFeed(applicationUser: ApplicationUser): INewsFeed{
        let feed: INewsFeed;
        switch(applicationUser.role){
            case ApplicationUserRole.PersonalTrainer:
                feed = this.personalTrainerNewsFeed;
                break;
            case ApplicationUserRole.ProgramDesigner:
                feed = this.programDesignerNewsFeed;
                break;
            case ApplicationUserRole.StrengthAthlete:
                feed = this.strengthAthleteNewsFeed;
                break;
        }
        return feed;
    }

    private get personalTrainerNewsFeed(): INewsFeed{
        return {
            posts: [
                {
                    author: {
                        name: 'Sarah Smith',
                        imageUrl: './assets/images/sara-smith.png'
                    },
                    content: {
                        text: 'Best coaching ever! Looking forward to the next session, Nohman!',
                    },
                    postedAt: '30 minutes ago'
                },
                {
                    author: {
                        name: 'Nohman Janjua',
                        imageUrl: './assets/images/personal-trainer-icon.png'
                    },
                    content: {
                        text: 'Impressive maximum strength  development by @Helge Andersen',
                        photoUrls: ['./assets/images/feed-img-full.jpg']
                    },
                    postedAt: '5 hours ago'
                },
                {
                    author: {
                        name: 'Lara James',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'Here are some pictures from today’s session. Loved it!',
                        photoUrls: ['./assets/images/personal-trainer-feed-1.jpg', './assets/images/personal-trainer-feed-2.jpg', './assets/images/personal-trainer-feed-3.jpg']
                    },
                    comments: [
                        {
                            author: {
                                name: 'Nohman Janjua',
                                imageUrl: './assets/images/personal-trainer-icon.png'
                            },
                            text: 'Pictures looks awesome! Next session is going to be great!',
                            postedAt: '30 minutes ago'
                        }
                    ],
                    postedAt: 'July 20, 2018'
                }
            ]
        }
    }

    private get programDesignerNewsFeed(): INewsFeed{
        return {
            posts: [
                {
                    author: {
                        name: 'Jeanette Wilson',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'Hi what is the idea behind the 10 reps x 10 sets in the GTV program?',
                    },
                    comments: [
                        {
                            author: {
                                name: 'Andreas Stensrud',
                                imageUrl: './assets/images/icons/icon-account-gray.png'
                            },
                            text: 'The idea is to accumulate a great deal of volume, because volume in perhaps the most important factor when it comes to increase  muscle mass',
                            postedAt: '30 minutes ago'
                        }
                    ],
                    postedAt: 'July 20, 2018'
                },
                {
                    author: {
                        name: 'Patrick Bet David',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'Is it possible to use bench press with wide grip in the 5x5 program?',
                    },
                    comments: [
                        {
                            author: {
                                name: 'Andreas Stensrud',
                                imageUrl: './assets/images/icons/icon-account-gray.png'
                            },
                            text: 'Of course! Do what suits you best.',
                            postedAt: '30 minutes ago'
                        }
                    ],
                    postedAt: 'July 20, 2018'
                }
            ]
        }
    }

    private get strengthAthleteNewsFeed(): INewsFeed{
        return {
            posts: [
                {
                    author: {
                        name: 'Nohman Janjua',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'The GVT programe is awesome. I really respond well to the big training volume. ',
                    },
                    postedAt: '30 minutes ago'
                },
                {
                    author: {
                        name: 'Nohman Janjua',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'The weights are getting heavier little by little thanks to the autoregulation function!',
                        photoUrls: ['./assets/images/feed-img-1.jpg', './assets/images/feed-img-2.jpg', './assets/images/feed-img-3.jpg']
                    },
                    postedAt: '30 minutes ago'
                },
                {
                    author: {
                        name: 'Patrick James ',
                        imageUrl: './assets/images/icons/icon-account-gray.png'
                    },
                    content: {
                        text: 'Video from todays chest workout. Can PT Nohman Janjua please give me feedback on my bench press technique?',
                        videoUrl: './assets/images/video.jpg'
                    },
                    comments: [
                        {
                            author: {
                                name: 'Nohman Janjua',
                                imageUrl: './assets/images/icons/icon-account-gray.png'
                            },
                            text: 'Chest up, shoulder blades down. Otherwise very good!',
                            postedAt: '30 minutes ago'
                        }
                    ],
                    postedAt: 'July, 20, 2018'
                }
            ]
        }
    }
}