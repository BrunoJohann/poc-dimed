import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscaComponentStub as stub} from './resultado-busca.component.stub'

import { ResultadoBuscaComponent } from '../resultado-busca.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesItemComponent } from '../../detalhes-item/detalhes-item.component';

describe('ResultadoBuscaComponent', () => {
  let component: ResultadoBuscaComponent;
  let fixture: ComponentFixture<ResultadoBuscaComponent>;
  let detalhesItemComponent: DetalhesItemComponent;
  let fixtureDetalhes: ComponentFixture<DetalhesItemComponent>;
  let modal: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ResultadoBuscaComponent,
        DetalhesItemComponent
      ],
      providers: [
        NgbActiveModal,
        { provide: NgbModal, useClass: stub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixtureDetalhes = TestBed.createComponent(DetalhesItemComponent)
    detalhesItemComponent = fixtureDetalhes.componentInstance;
    modal = TestBed.get(NgbModal);
    fixture = TestBed.createComponent(ResultadoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado que [buscaProduto] tenha sido chamada>>>>', () => {
    beforeEach(() => {
      spyOn(modal, 'open').and.callFake(() => { 
        return fixtureDetalhes
      }) 
      spyOn(detalhesItemComponent, 'setItemFinal')
      component.openModal( stub.mockItemFinal() );
    });

    it('Então deve ser chamado a função [open]', () => {
      expect(modal.open).toHaveBeenCalled();
    });

    it('Então deve ser chamado a função [setItemFinal]', () => {
      expect(detalhesItemComponent.setItemFinal).toHaveBeenCalled();
    })
  });
});
