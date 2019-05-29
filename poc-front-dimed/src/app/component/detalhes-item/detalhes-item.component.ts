import { Component, Input, OnChanges } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnChanges{

  @Input() itemFinal: ItemFinal

  constructor( config: NgbModalConfig, private modalService: NgbModal ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  ngOnChanges(){
    // console.log("itemFinal: ", this.itemFinal); 
  }

  openModel(varModal) {
    this.modalService.open(varModal)
  }

}
