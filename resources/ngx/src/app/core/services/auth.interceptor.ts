
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationService } from './application.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly applicationService: ApplicationService ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.applicationService.token;
        if (token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}