import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPjComponent } from './cadastrar-pj.component';

describe('CadastroPjComponent', () => {
  let component: CadastroPjComponent;
  let fixture: ComponentFixture<CadastroPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
