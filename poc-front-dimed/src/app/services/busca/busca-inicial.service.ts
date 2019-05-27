import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from 'src/app/model/Produto';

@Injectable({
  providedIn: 'root'
})
export class BuscaInicialService {

  constructor( private http: HttpClient ) { }

  url(produto) {
    return `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${produto}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;
  }

  getProduto(produto) {
    return this.http.get<Produto[]>(this.url(produto));
  }
  
}
