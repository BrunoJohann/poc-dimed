import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesItemComponent } from '../detalhes-item.component';
import { DetalheItemModule } from '../detalhe-item.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DetalhePackComponentStub as stub } from './detalhe-item.component.stub'

describe('DetalhesItemComponent', () => {
  let component: DetalhesItemComponent;
  let fixture: ComponentFixture<DetalhesItemComponent>;

  let activeModal: NgbActiveModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        DetalheItemModule
      ],
      providers: [ 
        NgbActiveModal
      ]
    })
    .compileComponents()
    .then(() => {
      
      activeModal = TestBed.get(NgbActiveModal)
      fixture = TestBed.createComponent(DetalhesItemComponent);
      component = fixture.componentInstance;
    })
  }));

  it('Component deve ser iniciado', () => {
    expect(component).toBeDefined();
  });

  describe('Quando o metodo [setItemFinal] for chamado >>>>>>', () => {
    beforeEach(() => {
      component.setItemFinal( stub.mockItemFinal() );
    });

    it('Então o item deve ser salvo', () => {
      expect(component.itemFinal).toEqual( stub.mockItemFinal() );
    });
  });

});
