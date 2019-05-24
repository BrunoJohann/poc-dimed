import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpBuscaInterceptor } from './http-busca-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpBuscaInterceptor,
      multi: true
    },
  ]
})
export class HttpBuscaInterceptorModule { }
