import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBuscaComponent } from './input-busca.component';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';

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
    BuscaInicialService
  ]
})
export class InputBuscaModule { }
