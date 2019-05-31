import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Precos } from 'src/app/model/EstruturaPreco/Precos.model';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaPrecoService {

  constructor( private http: HttpClient ) { }

  getPreco(codigo) {
    return this.http.get<Precos>(`http://api-int.grupodimedservices.com.br/tst/mostruario/v3/itens/precos?item=${codigo}&filial=101&perfil=1`);
  }

}
