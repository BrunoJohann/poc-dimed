import { Component, Output } from '@angular/core';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { Subject, Observable, from } from 'rxjs';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent {

  constructor(private buscaService: BuscaInicialService,
              private eventoBuscaProduto: Subject<string> ) 
              { }

  buscaProduto(event) {

    this.buscaService.getProdutoPorNome(Observeble.of(event))
            .subscribe({
              next: res => console.log(res),
              error: err => console.log(err)
            });
  }

}
