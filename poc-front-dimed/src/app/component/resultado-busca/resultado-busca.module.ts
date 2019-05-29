import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesItemComponent } from '../detalhes-item/detalhes-item.component';
import { ResultadoBuscaComponent } from './resultado-busca.component';
import { DetalheItemModule } from '../detalhes-item/detalhe-item.module';

@NgModule({
  declarations: [
    ResultadoBuscaComponent
  ],
  imports: [
    CommonModule,
    DetalheItemModule
  ],
  exports: [
    ResultadoBuscaComponent
  ]
})
export class ResultadoBuscaModule { }
