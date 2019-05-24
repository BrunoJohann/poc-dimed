import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BuscaInicialService {

  constructor( private http: HttpClient ) { }

  url(produto) {
    return `http://api-int.grupodimedservices.com.br/tst/item/v3/itens/base/autocomplete?nome=${produto}&codigoFilial=101&maxResult=200&ordenarRentabilidade=true&ordenarPreco=false`;
  }

  getProdutoPorNome(produto: Observable<string>) {
    return produto.pipe(debounceTime(200),
                        distinctUntilChanged(),
                        switchMap(res => this.getProduto(res)))
  }

  getProduto(produto) {
    return this.http.get(this.url(produto));
  }
  
}
