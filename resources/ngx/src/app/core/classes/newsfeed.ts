import { IApplicationUser } from "./user";

export interface INewsFeed{
    posts: INewsFeedPost[];
}

export interface INewsFeedPost{
    author: IApplicationUser;
    postedAt?: string;
    content: INewsFeedPostContent;
    comments?: INewsFeedPostComment[];
}


export interface INewsFeedPostContent{
    text?: string;
    photoUrls?: string[];
    videoUrl?: string;
}


export interface INewsFeedPostComment{
    author: IApplicationUser;
    text: string;
    postedAt: string;
}


