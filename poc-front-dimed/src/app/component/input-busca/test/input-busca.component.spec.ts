import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscaComponent } from '../input-busca.component';
import { InputBuscaModule } from '../input-busca.module';

import { InputBuscaComponentStub as stub} from './input-busca.component.stub'

import { BuscaInicialService } from 'src/app/services/busca/busca-inicial.service';
import { BuscaDetalhesService } from 'src/app/services/busca-detalhes/busca-detalhes.service';
import { BuscaPrecoService } from 'src/app/services/busca-preco/busca-preco.service';
import { BuscaEstoqueService } from 'src/app/services/busca-estoque/busca-estoque.service';
import { HttpClient } from 'selenium-webdriver/http';

fdescribe('InputBuscaComponent', () => {
  let component: InputBuscaComponent;
  let fixture: ComponentFixture<InputBuscaComponent>;

  let buscaService: BuscaInicialService;
  let buscaDetalheService: BuscaDetalhesService;
  let buscaEstoqueService: BuscaEstoqueService;
  let buscaPrecoService: BuscaPrecoService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        InputBuscaModule, 
      ],
      providers: [
        HttpClient,
        { provide: buscaService, useClass: stub },
        { provide: buscaDetalheService, useClass: stub },
        { provide: buscaEstoqueService, useClass: stub },
        { provide: buscaPrecoService, useClass: stub }
      ]
    })
    .compileComponents()
    .then(() => {
      httpClient = TestBed.get(HttpClient);
      buscaService = TestBed.get(BuscaInicialService); 
      buscaDetalheService = TestBed.get(BuscaDetalhesService);
      buscaEstoqueService = TestBed.get(BuscaEstoqueService);
      buscaPrecoService = TestBed.get(BuscaPrecoService);
      
      fixture = TestBed.createComponent(InputBuscaComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
