import { Component, Output, EventEmitter } from '@angular/core';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { Subject, Observable, from } from 'rxjs';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent {
  
  @Output() resBuscaApi = new EventEmitter();

  constructor(private buscaService: BuscaInicialService,
    private eventoBuscaProduto: Subject<string> ) 
              { }

  buscaProduto(event) {
    this.resBuscaApi.emit(event)
  // this.buscaService.getProdutoPorNome(event)
  //         .subscribe({
  //           next: res => console.log(res),
  //           error: err => console.log(err)
  //         });
  }

}
