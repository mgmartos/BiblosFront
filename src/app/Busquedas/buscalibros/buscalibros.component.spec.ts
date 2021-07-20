import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscalibrosComponent } from './buscalibros.component';

describe('BuscalibrosComponent', () => {
  let component: BuscalibrosComponent;
  let fixture: ComponentFixture<BuscalibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscalibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscalibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
