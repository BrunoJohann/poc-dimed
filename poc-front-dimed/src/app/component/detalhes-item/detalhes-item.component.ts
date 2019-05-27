import { Component, OnInit, Input } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnInit {

  @Input() itemFinal: ItemFinal

  constructor() { }

  ngOnInit() {
  }

}
