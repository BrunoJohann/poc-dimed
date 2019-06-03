import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { InputBuscaComponent } from '../input-busca.component';
import { InputBuscaModule } from '../input-busca.module';

import { InputBuscaComponentStub as stub} from './input-busca.component.stub';

import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { HttpClient } from 'selenium-webdriver/http';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

describe('InputBuscaComponent', () => {
  let component: InputBuscaComponent;
  let fixture: ComponentFixture<InputBuscaComponent>;

  let buscaService: BuscaInicialService;
  let detalheService: BuscaDetalhesService;
  let estoqueService: BuscaEstoqueService;
  let precoService: BuscaPrecoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        InputBuscaModule,
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
      buscaService = TestBed.get(BuscaInicialService); 
      detalheService = TestBed.get(BuscaDetalhesService);
      estoqueService = TestBed.get(BuscaEstoqueService);
      precoService = TestBed.get(BuscaPrecoService);

      fixture = TestBed.createComponent(InputBuscaComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));


  it('Component deve ser iniciado', () => {
    expect(component).toBeDefined();
  });

  describe('Dado que [buscaProduto] tenha sido chamada>>>>', () => {
    describe('E [getProduto] retorno um valor válido', () => {
      beforeEach(() => {
        spyOn(buscaService, 'getProduto').and.returnValue( of(stub.mockProduto()) );
        spyOn(component, 'postDetalhe')
        component.buscaProduto('')
      });
  
      it('Então deve chamar a função [postDetalhe]', () => {
        expect(component.postDetalhe).toHaveBeenCalled();
      });
    });

    describe('E [getProduto] retorno um valor inválido', () => {
      beforeEach(() => {
        spyOn(buscaService, 'getProduto').and.returnValue( throwError('') );
        spyOn(console, 'error');
        component.buscaProduto('');
      });
  
      it('Então deve aparecer um mensagem de erro no console com valor "Houve um erro na pesquisa"', () => {
        expect(console.error).toHaveBeenCalledWith('Houve um erro na pesquisa');
      });
    });
  });

  describe('Dado que [postDetalhe] tenha sido chamada>>>>', () => {
    describe('E o detalhe do item não seja undefined', () => {
      beforeEach(() => {
        spyOn(component, 'getForkJoin').and.returnValue( of([stub.mockProdutoDetalhe(), stub.mockEstoque(), stub.mockPrecos()]) );
        spyOn(component, 'atribuirValores')
        component.postDetalhe( stub.mockItemFinalArray() );
      });

      it('Então [atribuirValores] deve ser chamada', () => {
        expect(component.atribuirValores).toHaveBeenCalled();
      });
    });

    describe('E o detalhe do item seja undefined', () => {
      beforeEach(() => {
        spyOn(component, 'getForkJoin').and.returnValue( of([stub.mockProdutoDetalheVazio(), stub.mockEstoque(), stub.mockPrecos()]) );
        spyOn(component, 'atribuirValorSemResposta')
        component.postDetalhe( stub.mockItemFinalArray() );
      });

      it('Então [atribuirValorSemResposta] deve ser chamada', () => {
        expect(component.atribuirValorSemResposta).toHaveBeenCalled();
      });
    });
  });

  describe('Dado que [atribuirValores] seja chamada >>>', () => {
    let itemResposta: ItemFinal
    beforeEach(() => {
      itemResposta = component.atribuirValores( stub.mockItemFinal(), [stub.mockProdutoDetalhe(), stub.mockEstoque(), stub.mockPrecos()] );
    });

    it('Então deve retornar o item com os dados atribuidos', () => {
      expect(itemResposta).toEqual(stub.mockItemFinalAtribuidoValores());
    });

    it('Então o item deve receber o valor "mostrarItem = true"', () => {
      expect(itemResposta.mostrarItem).toBeTruthy();
    });
  });


  describe('Dado que [atribuirValorSemResposta] seja chamada >>>', () => {
    let itemResposta: ItemFinal
    beforeEach(() => {
      itemResposta = component.atribuirValorSemResposta( stub.mockItemFinal() )
    });

    it('Então o item deve receber o valor "mostrarItem = false"', () => {
      expect(itemResposta.mostrarItem).toBeFalsy();
    });
  });

  describe('Dado que [getForkJoin] tenha sido chamada>>>>', () => {    
    let detalhe, estoque, busca;
    beforeEach(() => {
      spyOn(detalheService, 'getDetalhe').and.returnValue( of(stub.mockProdutoDetalhe()) );
      spyOn(estoqueService, 'getEstoque').and.returnValue( of(stub.mockEstoque()) );
      spyOn(precoService, 'getPreco').and.returnValue( of(stub.mockPrecos()) )
      component.getForkJoin(123).subscribe( res => { 
        [ detalhe, estoque, busca ] = res
      });
    });

    it('Então deve retornar o ProdutoDetalhe na primeira posição', () => {
      expect(detalhe).toEqual(stub.mockProdutoDetalhe())
    })

    it('Então deve retornar o Estoque na segunda posição', () => {
      expect(estoque).toEqual(stub.mockEstoque())
    })

    it('Então deve retornar os Precos na terceira posição', () => {
      expect(busca).toEqual(stub.mockPrecos())
    })
  });
  
});
