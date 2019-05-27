import { Component, Output, EventEmitter } from '@angular/core';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { retry } from 'rxjs/operators';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { ItemFinal } from 'src/app/model/ItemFinal';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent {

  public listaItens: ItemFinal[];

  @Output() resBuscaApi = new EventEmitter();

  constructor(
    private buscaService: BuscaInicialService,
    private buscaDetalheService: BuscaDetalhesService ) { }

  buscaProduto(event: string) {
  this.buscaService.getProduto(event)
          .pipe(retry(3))
          .subscribe({
            next: listaItens => {
              this.listaItens = listaItens
              this.postDetalhe(this.listaItens)
            },
            error: err => console.log(err)
          });
  }

  postDetalhe(listaItens: ItemFinal[]) {
    listaItens.filter( item => {
      this.buscaDetalheService.buscarDetalhes(item.codigoItem)
        .subscribe(res => {
          if(res.itens[0]){
            item.ean = res.itens[0].ean
            item.precoPor = res.itens[0].precoPor
          } else {
            false
          }
        })
    } )
    this.enviaComponentePai(listaItens)
  }

  enviaComponentePai(listaItens) {
    this.resBuscaApi.emit(listaItens)
  }

}
