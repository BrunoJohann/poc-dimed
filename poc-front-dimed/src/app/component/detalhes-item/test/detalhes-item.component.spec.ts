import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesItemComponent } from '../detalhes-item.component';
import { DetalheItemModule } from '../detalhe-item.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DetalhePackComponentStub as stub } from './detalhe-item.component.stub'

xdescribe('DetalhesItemComponent', () => {
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
      fixture.detectChanges();
    })
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  describe('quando função [setItemFinal] for chamada >>>>', () => {
    beforeEach(() => {
      component.setItemFinal(stub.mockItemFinal());
    });
    // console.log(stub.mockItemFinal());
    
    it('Deve salvar o objeto', () => {
      expect(component.itemFinal).toEqual(stub.mockItemFinal());
    });
  });
});
