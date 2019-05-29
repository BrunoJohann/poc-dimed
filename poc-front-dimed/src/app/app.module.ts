import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PrimeiraTelaModule } from './component/primeira-tela/primeira-tela.module';

import { AppComponent } from './app.component';
import { HttpBuscaInterceptorModule } from './interceptor/http-busca-interceptor.module';
import { ResultadoBuscaComponent } from './component/resultado-busca/resultado-busca.component';
import { DetalhesItemComponent } from './component/detalhes-item/detalhes-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpBuscaInterceptorModule,
    PrimeiraTelaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
