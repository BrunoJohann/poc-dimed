import { TestBed } from '@angular/core/testing';

import { BuscaPrecoService } from './busca-preco.service';

describe('BuscaPrecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaPrecoService = TestBed.get(BuscaPrecoService);
    expect(service).toBeTruthy();
  });
});
