import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpBuscaInterceptor implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const reqClone = req.clone({
            headers: req.headers.set('app-token','mCl6SnTQp6eT')
        });
        return next.handle(reqClone);
    }
}
