import { TestBed } from '@angular/core/testing';

import { BuscaInicialService } from './busca-inicial.service';

xdescribe('BuscaInicialService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BuscaInicialService
    ]
  }));

  it('should be created', () => {
    const service: BuscaInicialService = TestBed.get(BuscaInicialService);
    expect(service).toBeTruthy();
  });
});
