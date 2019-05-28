import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estoque } from 'src/app/model/Estoque.model';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaEstoqueService {

  constructor( private http: HttpClient ) { }

  urlEstoque(codigo) {
    return `http://api-int.grupodimedservices.com.br/tst/filial/v1/filiais/101/estoque?itens=${codigo}`
  }

  getEstoque(codigo) {
    return this.http.get<Estoque>(this.urlEstoque(codigo));
  }

  getArrayEstoque(listaItens: ItemFinal[]) {
    return this.http.get<Estoque>(this.urlEstoque(''));
  }

}
