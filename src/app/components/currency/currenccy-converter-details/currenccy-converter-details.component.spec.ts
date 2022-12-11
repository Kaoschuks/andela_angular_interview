import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenccyConverterDetailsComponent } from './currenccy-converter-details.component';

describe('CurrenccyConverterDetailsComponent', () => {
  let component: CurrenccyConverterDetailsComponent;
  let fixture: ComponentFixture<CurrenccyConverterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenccyConverterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenccyConverterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
