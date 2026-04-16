import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte3 } from './parte3';

describe('Parte3', () => {
  let component: Parte3;
  let fixture: ComponentFixture<Parte3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parte3],
    }).compileComponents();

    fixture = TestBed.createComponent(Parte3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
