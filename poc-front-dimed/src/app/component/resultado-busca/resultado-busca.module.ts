import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesItemComponent } from '../detalhes-item/detalhes-item.component';
import { ResultadoBuscaComponent } from './resultado-busca.component';

@NgModule({
  declarations: [
    ResultadoBuscaComponent,
    DetalhesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResultadoBuscaComponent
  ]
})
export class ResultadoBuscaModule { }
