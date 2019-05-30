import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBuscaComponent } from './input-busca.component';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';

@NgModule({
  declarations: [
    InputBuscaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputBuscaComponent
  ],
  providers: [
    BuscaInicialService,
    BuscaDetalhesService,
    BuscaEstoqueService,
    BuscaPrecoService
  ]
})
export class InputBuscaModule { }
