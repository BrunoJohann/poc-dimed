import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesItemComponent } from './detalhes-item.component';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';

@NgModule({
  declarations: [
    DetalhesItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DetalhesItemComponent
  ]
})
export class DetalheItemModule { }
