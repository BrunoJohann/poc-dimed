import { TestBed } from '@angular/core/testing';

import { BuscaEstoqueService } from './busca-estoque.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BuscaEstoqueService', () => {
  let service: BuscaEstoqueService;
  let httpClient: HttpClient;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [
        BuscaEstoqueService,
        HttpClient,
        HttpHandler
      ]
    })
    service = testBed.get(BuscaEstoqueService);
    httpClient = testBed.get(HttpClient);
  });

  it('Deve ser criada', () => {
    expect(service).toBeDefined();
  });

  describe('Quando [getEstoque] >>>>', () => {
    beforeEach(() => {
      spyOn(httpClient, 'get')
      service.getEstoque('para');
    });

    it('Então [get] deve ser chamado', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });
  });

});
