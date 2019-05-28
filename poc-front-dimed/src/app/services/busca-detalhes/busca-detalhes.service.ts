import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ItemDetalhePost } from 'src/app/model/EstruturaPost/ItemDetalhePost';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { ItemDetalhePostModel } from 'src/app/model/EstruturaPost/ItemDetalhePost.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaDetalhesService {

  constructor( private http: HttpClient ) { }

  urlDetalhes() {
    return 'http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/detalhe';
  }

  getDetalhe(codigo: number){
    ItemDetalhePost.itens[0].codigo = codigo;
    return this.http.post<ProdutoDetalhe>(this.urlDetalhes(), ItemDetalhePost)
  }

  // getDetalhes(listaItens: ItemFinal[]){
  //   let codigos = []
  //   let postDetalhes: ItemDetalhePostModel
    
  //   for(let item of listaItens){ 
  //     postDetalhes.itens[0].codigo = item.codigoItem
  //     codigos.push(postDetalhes.itens[0].codigo) 
  //   }
  //   console.log(codigos);
  //   return this.http.post<ProdutoDetalhe[]>(this.urlDetalhes(), codigos)
  // }
  
}
