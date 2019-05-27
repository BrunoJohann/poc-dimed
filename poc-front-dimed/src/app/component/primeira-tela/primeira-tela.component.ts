import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-primeira-tela',
  templateUrl: './primeira-tela.component.html',
  styleUrls: ['./primeira-tela.component.css']
})
export class PrimeiraTelaComponent {

  listaDeItens: Produto[];

  constructor() { }

  resInputFilho(event) {
    this.listaDeItens = event
    console.log("pai: ", this.listaDeItens)
  }

}
