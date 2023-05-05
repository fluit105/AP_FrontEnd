import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardslideComponent } from './cardslide.component';

describe('CardslideComponent', () => {
  let component: CardslideComponent;
  let fixture: ComponentFixture<CardslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardslideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
