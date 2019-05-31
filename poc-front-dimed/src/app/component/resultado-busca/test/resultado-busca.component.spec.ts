import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscaComponentStub as stub} from './resultado-busca.component.stub'

import { ResultadoBuscaComponent } from '../resultado-busca.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('ResultadoBuscaComponent', () => {
  let component: ResultadoBuscaComponent;
  let fixture: ComponentFixture<ResultadoBuscaComponent>;
  let modal: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBuscaComponent ],
      providers: [
        { provide: NgbModal, useClass: stub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    modal = TestBed.get(NgbModal);
    fixture = TestBed.createComponent(ResultadoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('', () => {
    beforeEach(() => {
      spyOn(modal, 'open').and.callFake(() => { })
    });

    it('', () => {
      expect(component.openModal( stub.mockItemFinal() ))
    })
  });
});
