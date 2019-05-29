import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBuscaModule } from '../input-busca/input-busca.module';

import { PrimeiraTelaComponent } from './primeira-tela.component';
import { ResultadoBuscaModule } from '../resultado-busca/resultado-busca.module';


@NgModule({
  declarations: [
    PrimeiraTelaComponent
  ],
  imports: [
    CommonModule,
    InputBuscaModule,
    ResultadoBuscaModule
  ],
  exports: [
    PrimeiraTelaComponent
  ]
})
export class PrimeiraTelaModule { }
