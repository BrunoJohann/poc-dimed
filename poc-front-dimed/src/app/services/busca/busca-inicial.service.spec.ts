import { TestBed } from '@angular/core/testing';

import { BuscaInicialService } from './busca-inicial.service';

describe('BuscaInicialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaInicialService = TestBed.get(BuscaInicialService);
    expect(service).toBeTruthy();
  });
});
