import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { forkJoin } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

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

  public listaItensFinal: ItemFinal[];

  @Output() resBuscaApi = new EventEmitter();

  constructor(
    public toastr: ToastrService,
    public buscaService: BuscaInicialService,
    public buscaDetalheService: BuscaDetalhesService,
    public buscaEstoqueService: BuscaEstoqueService,
    public buscaPrecoService: BuscaPrecoService ) { }

  buscaProduto(event: string) {
    if( event.length >= 3 ) {
      this.buscaService.getProduto(event)
            .subscribe({
              next: listaItens => {
                this.postDetalhe(listaItens)
              },
              error: () => this.eventoInvalido('Pesquisa Invalida')
            });
    } else {
      this.eventoInvalido('Menor que 3')
    }
  }

  eventoInvalido(tipo: string) {
    switch(tipo) {
      case 'Pesquisa Invalida':
        this.toastr.warning('Produto não registrado')
        break;
      case 'Menor que 3': 
        this.toastr.warning('Campo menor que 3 caracteres ','Pesquisa invalida')
        break;
    }
  }

  postDetalhe(listaItens: ItemFinal[]) {
    listaItens.map( item => {
      this.getForkJoin(item.codigoItem)
        .subscribe(res => {
          if( res[0].itens[0] ){
            this.atribuirValores(item, res)
          } else { 
            this.atribuirValorSemResposta(item)
          }
        })
    })
    this.enviaComponentePai(listaItens)
  }

  atribuirValores( item: ItemFinal, resFork ) {
    let detalhe = resFork[0].itens[0];
    let estoque = resFork[1][0];
    let preco = resFork[2][0].preco;

    item.mostrarItem = true
    item.promocao = detalhe.promocao
    item.ean = detalhe.ean
    item.origemDesconto = detalhe.origemDesconto
    item.nomenclatura = detalhe.nomenclatura
    item.nomenclaturaDetalhada = detalhe.nomenclaturaDetalhada
    item.principioAtivo = detalhe.principioAtivo
    item.classeTerapeutica = detalhe.classeTerapeutica
    item.situacaoItem = detalhe.situacaoItem
    item.advertencias = detalhe.advertencias
    item.categorias = detalhe.categorias
    item.precoDe = detalhe.precoDe
    item.estoqueLoja = estoque.estoqueLoja
    item.precoPor = preco.precoPor
    item.precoVenda = preco.precoVenda
    
    return item
  }

  atribuirValorSemResposta(item) {
    item.mostrarItem = false
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


}
