import { TestBed } from '@angular/core/testing';

import { BuscaDetalhesService } from './busca-detalhes.service';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BuscaDetalhesService', () => {
  let serviceDetalhe: BuscaDetalhesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    const testBed = TestBed.configureTestingModule({
      providers: [
        BuscaDetalhesService,
        HttpClient,
        HttpHandler
      ]
    })
    serviceDetalhe = testBed.get(BuscaDetalhesService);
    httpClient = testBed.get(HttpClient);
  });

  it('Deve ser criada', () => {
    expect(serviceDetalhe).toBeTruthy();
  });

  describe('Quando [getDetalhe] for chamada >>>>', () => {
    beforeEach(() => {
      spyOn(httpClient, 'post')
      serviceDetalhe.getDetalhe(0);
    });

    it('Então [post] deve ser chamado', () => {
      expect(httpClient.post).toHaveBeenCalled()
    });
  });

});
