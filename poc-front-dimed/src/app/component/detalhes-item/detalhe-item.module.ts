import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesItemComponent } from './detalhes-item.component';
import { ResultadoBuscaComponent } from '../resultado-busca/resultado-busca.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DetalhesItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DetalhesItemComponent
  ],
  providers:[
    NgbActiveModal
  ]
})
export class DetalheItemModule { }
