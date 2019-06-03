import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { ItemDetalhePost } from 'src/app/model/EstruturaPost/ItemDetalhePost';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaDetalhesService {

  constructor( private http: HttpClient ) { }

  getDetalhe(codigo: number){
    ItemDetalhePost.itens[0].codigo = codigo;
    return this.http.post<ProdutoDetalhe>('http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/detalhe', ItemDetalhePost)
  }
  
}
