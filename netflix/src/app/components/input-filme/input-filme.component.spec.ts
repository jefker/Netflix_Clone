import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilmeComponent } from './input-filme.component';

describe('InputFilmeComponent', () => {
  let component: InputFilmeComponent;
  let fixture: ComponentFixture<InputFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
