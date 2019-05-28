import { Component, Output, EventEmitter } from '@angular/core';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { retry } from 'rxjs/operators';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { forkJoin } from 'rxjs';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';
import { Estoque } from 'src/app/model/Estoque.model';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';
import { Precos } from 'src/app/model/EstruturaPreco/Precos.model';

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
    public buscaEstoqueService: BuscaEstoqueService,
    public buscaPrecoService: BuscaPrecoService ) { }

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
    // let detalhes = this.buscaDetalheService.getDetalhes(listaItens);
    // detalhes.subscribe(res => console.log(res))

    listaItens.filter( item => {
      this.getForkJoin(item.codigoItem)
        .subscribe(res => {
          if(res[0].itens[0]){
            this.atribuirValores(item, res)
          } else {
            false
          }
        })
    } )
    this.enviaComponentePai(listaItens)
  }

  atribuirValores(item: ItemFinal, resFork: [ProdutoDetalhe, Estoque, Precos]) {
    let detalhe = resFork[0].itens[0];
    let estoque = resFork[1][0];
    let preco = resFork[2][0].preco

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
    item.precoPor = preco.precoPor
    item.precoDe = preco.precoDe
    item.precoVenda = preco.precoVenda
    return item
  }

  enviaComponentePai(listaItens) {
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

  // getForkJoinConjunto(listaItens: ItemFinal[]) {
  //   let detalhes = this.buscaDetalheService.getDetalhes(listaItens);
  //   let estoque = this.buscaEstoqueService.getArrayEstoque(listaItens);
  //   let precos = this.buscaPrecoService.getPrecos(listaItens);
  //   return forkJoin([detalhes, estoque, precos])
  // }

}
