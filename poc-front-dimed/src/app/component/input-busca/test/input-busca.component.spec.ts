import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscaComponent } from '../input-busca.component';
import { InputBuscaModule } from '../input-busca.module';

import { InputBuscaComponentStub as stub} from './input-busca.component.stub';

import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { HttpClient } from 'selenium-webdriver/http';
import { of } from 'rxjs';
import { ItemFinal } from 'src/app/model/ItemFinal.model';

fdescribe('InputBuscaComponent', () => {
  let component: InputBuscaComponent;
  let fixture: ComponentFixture<InputBuscaComponent>;

  let buscaService: BuscaInicialService;
  let detalheService: BuscaDetalhesService;
  let estoqueService: BuscaEstoqueService;
  let precoService: BuscaPrecoService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        InputBuscaModule,
      ],
      providers: [
        { provide: HttpClient, useClass: stub },
        { provide: BuscaInicialService, useClass: stub },
        { provide: BuscaDetalhesService, useClass: stub },
        { provide: BuscaEstoqueService, useClass: stub },
        { provide: BuscaPrecoService, useClass: stub }
      ]
    })
    .compileComponents()
    .then(() => {
      httpClient = TestBed.get(HttpClient);
      buscaService = TestBed.get(BuscaInicialService); 
      detalheService = TestBed.get(BuscaDetalhesService);
      estoqueService = TestBed.get(BuscaEstoqueService);
      precoService = TestBed.get(BuscaPrecoService);

      fixture = TestBed.createComponent(InputBuscaComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado que [buscaProduto] tenha sido chamada>>>>', () => {
    beforeEach(() => {
      spyOn(buscaService, 'getProduto').and.returnValue( of(stub.mockProduto()) );
      spyOn(component, 'postDetalhe')
      component.buscaProduto('')
    });

    it('Então deve chamar a função [postDetalhe]', () => {
      expect(component.postDetalhe).toHaveBeenCalled();
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

  xdescribe('Dado que [atribuirValores] seja chamada >>>', () => {
    let itemResposta: ItemFinal
    beforeEach(() => {
      itemResposta = component.atribuirValores( stub.mockItemFinal(), [stub.mockProdutoDetalheVazio(), stub.mockEstoque(), stub.mockPrecos()] );
    });

    it('', () => {
      console.log('precos', stub.mockPrecos());
      
      console.log("Mock", stub.mockItemFinalAtribuidoValores());
      console.log('res', itemResposta);
      
      
      expect(itemResposta).toEqual(stub.mockItemFinalAtribuidoValores());
    });
  });


  describe('Dado que [atribuirValorSemResposta] seja chamada >>>', () => {
    let item: ItemFinal
    beforeEach(() => {
      item = component.atribuirValorSemResposta( stub.mockItemFinal() )
    });

    it('Então o item deve receber o valor "mostrarItem = false"', () => {
      expect(item.mostrarItem).toBeFalsy();
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
