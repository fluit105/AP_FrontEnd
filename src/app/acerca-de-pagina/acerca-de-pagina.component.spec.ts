import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePaginaComponent } from './acerca-de-pagina.component';

describe('AcercaDePaginaComponent', () => {
  let component: AcercaDePaginaComponent;
  let fixture: ComponentFixture<AcercaDePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDePaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
