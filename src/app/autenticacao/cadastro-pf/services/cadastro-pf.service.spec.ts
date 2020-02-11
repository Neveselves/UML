import { TestBed } from '@angular/core/testing';

import { CadastroPfService } from './cadastro-pf.service';

describe('CadastroPfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroPfService = TestBed.get(CadastroPfService);
    expect(service).toBeTruthy();
  });
});
