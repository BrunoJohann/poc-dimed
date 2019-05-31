import { TestBed } from '@angular/core/testing';

import { BuscaPrecoService } from './busca-preco.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BuscaPrecoService', () => {
  let precoService: BuscaPrecoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [
        BuscaPrecoService,
        HttpClient,
        HttpHandler
      ]
    })
    precoService = testBed.get(BuscaPrecoService);
    httpClient = testBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(precoService).toBeTruthy();
  });

  describe('Quando [getPreco] >>>>', () => {
    beforeEach(() => {
      spyOn(httpClient, 'get')
      precoService.getPreco('para');
    });

    it('Então [get] deve ser chamado', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });
  });

});
