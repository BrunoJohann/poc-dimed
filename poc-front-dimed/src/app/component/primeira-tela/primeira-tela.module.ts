import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBuscaModule } from '../input-busca/input-busca.module';

import { PrimeiraTelaComponent } from './primeira-tela.component';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';
import { DetalhesItemComponent } from '../detalhes-item/detalhes-item.component';

@NgModule({
  declarations: [
    PrimeiraTelaComponent,
    ResultadoBuscaComponent,
    DetalhesItemComponent
  ],
  imports: [
    CommonModule,
    InputBuscaModule
  ],
  exports: [
    PrimeiraTelaComponent
  ]
})
export class PrimeiraTelaModule { }
