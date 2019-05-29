import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnInit {

  @Input() itemFinal: ItemFinal

  constructor( public activeModal: NgbActiveModal ) {
  }

  ngOnInit() {
  }

  setItemFinal(item: ItemFinal) {
    console.log(item);
    
    this.itemFinal = item;
  }

}
