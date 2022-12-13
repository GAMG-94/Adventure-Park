import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaModalComponent } from './ventana-modal.component';

describe('VentanaModalComponent', () => {
  let component: VentanaModalComponent;
  let fixture: ComponentFixture<VentanaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
