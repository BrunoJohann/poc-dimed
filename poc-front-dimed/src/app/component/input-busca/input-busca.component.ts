import { Component, Output, EventEmitter } from '@angular/core';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { retry } from 'rxjs/operators';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { ItemFinal } from 'src/app/model/ItemFinal';
import { forkJoin } from 'rxjs';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent {

  public listaItens: ItemFinal[];

  @Output() resBuscaApi = new EventEmitter();

  constructor(
    public buscaService: BuscaInicialService,
    public buscaDetalheService: BuscaDetalhesService,
    public buscaEStoqueService: BuscaEstoqueService ) { }

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
      this.getForkJoin(item.codigoItem)
        .subscribe(res => {
          if(res[0].itens[0]){
            item.ean = res[0].itens[0].ean
            item.precoPor = res[0].itens[0].precoPor
            item.estoqueLoja = res[1][0].estoqueLoja
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

  getForkJoin(codigo) {
    return forkJoin([
        this.buscaDetalheService.buscarDetalhes(codigo),
        this.buscaEStoqueService.getEstoque(codigo)
      ]
    )
    // const detalhes = this.buscaDetalheService.buscarDetalhes(codigo)
    // const estoque = this.buscaEStoqueService.getEstoque(codigo)
    // return forkJoin([detalhes, estoque]);
  }

}
