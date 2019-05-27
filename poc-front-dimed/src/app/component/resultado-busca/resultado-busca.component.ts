import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.css']
})
export class ResultadoBuscaComponent implements OnChanges {

  @Input() listaDoPai: Produto[]

  constructor() { }

  ngOnChanges() {
    console.log("Filho", this.listaDoPai);
  }

}
