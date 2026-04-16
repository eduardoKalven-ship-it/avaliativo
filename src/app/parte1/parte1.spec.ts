import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte1 } from './parte1';

describe('Parte1', () => {
  let component: Parte1;
  let fixture: ComponentFixture<Parte1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parte1],
    }).compileComponents();

    fixture = TestBed.createComponent(Parte1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
