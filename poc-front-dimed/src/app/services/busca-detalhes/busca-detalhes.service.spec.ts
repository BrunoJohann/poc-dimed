import { TestBed } from '@angular/core/testing';

import { BuscaDetalhesService } from './busca-detalhes.service';

describe('BuscaDetalhesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaDetalhesService = TestBed.get(BuscaDetalhesService);
    expect(service).toBeTruthy();
  });
});
