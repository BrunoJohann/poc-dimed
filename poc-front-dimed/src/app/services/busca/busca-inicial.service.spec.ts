import { TestBed } from '@angular/core/testing';

import { BuscaInicialService } from './busca-inicial.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('BuscaInicialService', () => {
  let service: BuscaInicialService;
  let httpClient: HttpClient;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [
        BuscaInicialService,
        HttpClient,
        HttpHandler
      ]
    })
    service = testBed.get(BuscaInicialService);
    httpClient = testBed.get(HttpClient);
  });

  it('Deve ser criada', () => {
    expect(service).toBeDefined();
  });
  
  describe('Quando [getProduto] >>>>', () => {
    beforeEach(() => {
      spyOn(httpClient, 'get')
      service.getProduto('para');
    });

    it('Então [get] deve ser chamado', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });
  });

});
