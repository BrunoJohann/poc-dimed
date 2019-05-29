import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheItemModule } from '../detalhes-item/detalhe-item.module';

import { ResultadoBuscaComponent } from './resultado-busca.component';
import { DetalhesItemComponent } from '../detalhes-item/detalhes-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ResultadoBuscaComponent
  ],
  imports: [
    CommonModule,
    DetalheItemModule,
    NgbModule
  ],
  exports: [
    ResultadoBuscaComponent
  ],
  entryComponents: [ DetalhesItemComponent ]
})
export class ResultadoBuscaModule { }
