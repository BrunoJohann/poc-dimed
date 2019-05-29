import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DetalhesItemComponent } from './detalhes-item.component';

@NgModule({
  declarations: [
    DetalhesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DetalhesItemComponent
  ],
  providers: [
    NgbModalConfig, 
    NgbModal
  ]
})
export class DetalheItemModule { }
