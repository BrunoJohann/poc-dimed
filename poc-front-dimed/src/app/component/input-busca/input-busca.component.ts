import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { forkJoin, of, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';
import { Estoque } from 'src/app/model/Estoque.model';
import { Precos } from 'src/app/model/EstruturaPreco/Precos.model';

import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';

@Component({
  selector: 'app-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['./input-busca.component.css']
})
export class InputBuscaComponent {

  // public listaItens: ItemFinal[];

  @Output() resBuscaApi = new EventEmitter();

  constructor(
    public buscaService: BuscaInicialService,
    public buscaDetalheService: BuscaDetalhesService,
    public buscaEstoqueService: BuscaEstoqueService,
    public buscaPrecoService: BuscaPrecoService ) { }

  buscaProduto(event: string) {
  this.buscaService.getProduto(event)
          .pipe(retry(3))
          .subscribe({
            next: listaItens => {
              this.postDetalhe(listaItens)
            },
            error: err => console.log(err)
          });
  }

  postDetalhe(listaItens: ItemFinal[]) {
    // let detalhes = this.buscaDetalheService.getDetalhes(listaItens);
    // detalhes.subscribe(res => console.log(res))
    
    listaItens.map( item => {
      this.getForkJoin(item.codigoItem)
        .subscribe(res => {
          if( res[0].itens[0] ){
            this.atribuirValores(item, res)
          } 
        })
    })
    // this.forAtribuidor(listaItens).subscribe(res => console.log(res))
    this.enviaComponentePai(listaItens)
  }

  forAtribuidor(listaItens): Observable<ItemFinal[]>{
    return listaItens.map( item => {
      this.getForkJoin(item.codigoItem)
        .subscribe(res => {
          if( res[0].itens[0] ){
            this.atribuirValores(item, res)
          } 
        })
    })
  }

  atribuirValores(item: ItemFinal, resFork: [ProdutoDetalhe, Estoque, Precos]) {
    let detalhe = resFork[0].itens[0];
    let estoque = resFork[1][0];
    let preco = resFork[2][0].preco;

    item.ean = detalhe.ean
    item.origemDesconto = detalhe.origemDesconto
    item.nomenclatura = detalhe.nomenclatura
    item.nomenclaturaDetalhada = detalhe.nomenclaturaDetalhada
    item.principioAtivo = detalhe.principioAtivo
    item.classeTerapeutica = detalhe.classeTerapeutica
    item.situacaoItem = detalhe.situacaoItem
    item.advertencias = detalhe.advertencias
    item.categorias = detalhe.categorias
    item.estoqueLoja = estoque.estoqueLoja
    item.precoPor = preco.precoPor?preco.precoPor:undefined
    item.precoDe = preco.precoDe
    item.precoVenda = preco.precoVenda
    return item
  }

  enviaComponentePai(listaItens) {
    // listaItens.map(res => res.codigoItem==872440? console.log(res):res)
    // listaItens.filter( item => {
    //   if(typeof item.precoPor === 'undefined') {
    //     console.log(item.codigoItem, item.precoPor)
    //   }
    // })
    this.resBuscaApi.emit(listaItens)
  }

  getForkJoin(codigo) {
    return forkJoin([
        this.buscaDetalheService.getDetalhe(codigo),
        this.buscaEstoqueService.getEstoque(codigo),
        this.buscaPrecoService.getPreco(codigo)
      ]
    )
  }


}
