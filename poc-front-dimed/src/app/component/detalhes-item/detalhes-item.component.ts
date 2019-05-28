import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnChanges{

  @Input() itemFinal: ItemFinal

  ngOnChanges(){
    // console.log("itemFinal: ", this.itemFinal); 
  }

}
