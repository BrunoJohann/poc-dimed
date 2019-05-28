import { Component } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

@Component({
  selector: 'app-primeira-tela',
  templateUrl: './primeira-tela.component.html',
  styleUrls: ['./primeira-tela.component.css']
})
export class PrimeiraTelaComponent {

  listaDeItens: ItemFinal[];

  constructor() { }

  resInputFilho(event) {
    this.listaDeItens = event
    // console.log("pai: ", this.listaDeItens)
  }

}
