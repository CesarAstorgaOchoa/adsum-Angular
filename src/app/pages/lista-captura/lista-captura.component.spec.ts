import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCapturaComponent } from './lista-captura.component';

describe('ListaCapturaComponent', () => {
  let component: ListaCapturaComponent;
  let fixture: ComponentFixture<ListaCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCapturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
