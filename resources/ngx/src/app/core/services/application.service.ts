import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class ApplicationService {
    private baseUrl: string = '/api';
    private applicationUser: Object;
    private apiToken: HTMLMetaElement;
    constructor(private readonly http: HttpClient, private readonly meta: Meta) { 
        this.apiToken = this.meta.getTag('name=api-token');
    }

    get token(): string{
        return this.apiToken.content;
    }

    get options(): any {
        return {
            observe: 'response',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${this.apiToken.content}`
            })
        };
    }

    get authenticatedUser(): Observable<Object>{
        let observable;
        if(this.applicationUser){
            observable = new Observable<Object>((observer) => {
                observer.next(this.applicationUser);
                observer.complete();
            });
        }else{
            observable = this.http.get(`${this.baseUrl}/user`);
            observable.subscribe(u => this.applicationUser = u);
        }
        return observable;
    }
}