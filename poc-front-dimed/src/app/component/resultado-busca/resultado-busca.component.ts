import { Component, Input, OnChanges } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.css']
})
export class ResultadoBuscaComponent implements OnChanges {

  @Input() listaDoPai: ItemFinal[]

  constructor() { }

  ngOnChanges() {
    // console.log("Filho", this.listaDoPai);
       
  }

}
