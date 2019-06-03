import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraTelaComponentStub as stub } from './primeira-tela.component.stub'

import { PrimeiraTelaComponent } from '../primeira-tela.component';
import { PrimeiraTelaModule } from '../primeira-tela.module';
import { HttpClient } from 'selenium-webdriver/http';
import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';

describe('PrimeiraTelaComponent', () => {
  let component: PrimeiraTelaComponent;
  let fixture: ComponentFixture<PrimeiraTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        PrimeiraTelaModule 
      ],
      providers: [
        { provide: BuscaInicialService, useClass: stub },
        { provide: BuscaDetalhesService, useClass: stub },
        { provide: BuscaEstoqueService, useClass: stub },
        { provide: BuscaPrecoService, useClass: stub }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PrimeiraTelaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('Component deve ser iniciado', () => {
    expect(component).toBeDefined();
  });

  describe('Dado que [resInputFilho] tenha sido chamada passando um array de "ItemFinal" >>>>', () => {
    beforeEach(() => {
      component.resInputFilho( stub.mockItemFinalArray() );
    })

    it('Então o item deve ser salvo', () => {
      expect(component.listaDeItens).toEqual( stub.mockItemFinalArray() );
    });
  });
});
