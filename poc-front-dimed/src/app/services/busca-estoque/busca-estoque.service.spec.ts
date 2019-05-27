import { TestBed } from '@angular/core/testing';

import { BuscaEstoqueService } from './busca-estoque.service';

describe('BuscaEstoqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaEstoqueService = TestBed.get(BuscaEstoqueService);
    expect(service).toBeTruthy();
  });
});
