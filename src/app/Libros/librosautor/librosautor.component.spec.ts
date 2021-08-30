import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosautorComponent } from './librosautor.component';

describe('LibrosautorComponent', () => {
  let component: LibrosautorComponent;
  let fixture: ComponentFixture<LibrosautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosautorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
