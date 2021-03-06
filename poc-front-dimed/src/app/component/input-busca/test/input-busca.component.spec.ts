import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { InputBuscaComponent } from '../input-busca.component';
import { InputBuscaModule } from '../input-busca.module';

import { InputBuscaComponentStub as stub} from './input-busca.component.stub';

import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';

describe('InputBuscaComponent', () => {
  let component: InputBuscaComponent;
  let fixture: ComponentFixture<InputBuscaComponent>;

  let toastr: ToastrService;
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
        ToastrService,
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
      toastr = TestBed.get(ToastrService);

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
        component.buscaProduto('para')
      });
  
      it('Então deve chamar a função [postDetalhe]', () => {
        expect(component.postDetalhe).toHaveBeenCalled();
      });
    });

    describe('E [getProduto] retorno um valor inválido', () => {
      beforeEach(() => {
        spyOn(buscaService, 'getProduto').and.returnValue( throwError('') );
        spyOn(component, 'eventoInvalido')
        component.buscaProduto('pwiqeqwjdoi');
      });
  
      it('Então [eventoInvalido] deve ser chamado com o campo "Pesquisa Invalida"', () => {
        expect(component.eventoInvalido).toHaveBeenCalledWith('Pesquisa Invalida');
      });
    });

    describe('E o evento tenha menos de 3 caracteres', () => {
      beforeEach(() => {
        spyOn(component, 'eventoInvalido')
        component.buscaProduto('');
      });
  
      it('Então [eventoInvalido] deve ser chamado com o campo "Menor que 3"', () => {
        expect(component.eventoInvalido).toHaveBeenCalledWith('Menor que 3');
      });
    });
  });

  describe('Dado que [eventoInvalido] tenha sido chamada >>>>', () => {
    beforeEach(() => {
      spyOn(toastr, 'warning')

    });

    describe('E tenha sido chamado com o campo "Pesquisa Invalida"', () => {
      beforeEach(() => {
        component.eventoInvalido('Pesquisa Invalida')
      });

      it('', () => {
        expect(toastr.warning).toHaveBeenCalled();
      });
    })

    describe('E tenha sido chamado com o campo "Menor que 3"', () => {
      beforeEach(() => {
        component.eventoInvalido('Menor que 3')
      });

      it('', () => {
        expect(toastr.warning).toHaveBeenCalled();
      });
    })
  });

  describe('Dado que [postDetalhe] tenha sido chamada >>>>', () => {
    describe('E o detalhe do item não seja undefined', () => {
      beforeEach(() => {
        spyOn(component, 'getForkJoin').and.returnValue( of([stub.mockProdutoDetalhe(), stub.mockEstoque(), stub.mockPrecos()]) );
        spyOn(component, 'atribuirValores')
        spyOn(component, 'enviaComponentePai')
        component.postDetalhe( stub.mockItemFinalArray() );
      });

      it('Então [atribuirValores] deve ser chamada', () => {
        expect(component.atribuirValores).toHaveBeenCalled();
      });

      it('Então [enviaComponentePai] deve ser chamada', () => {
        expect(component.enviaComponentePai).toHaveBeenCalledWith(stub.mockItemFinalArray())
      });
    });

    describe('Dado que [enviaComponentePai] tenha sido chamada com uma lista>>>>', () => {
      beforeEach(() => {
        spyOn(component.resBuscaApi, 'emit');
        component.enviaComponentePai( stub.mockItemFinalArray() );
      });

      it('Então [emit] deve ser chamada com a mesma lista', () => {
        expect(component.resBuscaApi.emit).toHaveBeenCalledWith(stub.mockItemFinalArray());
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
