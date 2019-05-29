import { Component, Input, OnChanges } from '@angular/core';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesItemComponent } from '../detalhes-item/detalhes-item.component';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.css'],
  // providers: [ NgbModal ]
})
export class ResultadoBuscaComponent {

  @Input() listaDoPai: ItemFinal[]

  constructor( private modalService: NgbModal ) { }

  public openModal(item: any) {
    const modal = this.modalService.open(DetalhesItemComponent, { centered: true, size: 'lg' });
    modal.componentInstance.setItemFinal(item);
  }

}
