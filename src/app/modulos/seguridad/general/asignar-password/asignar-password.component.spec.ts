import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPasswordComponent } from './asignar-password.component';

describe('AsignarPasswordComponent', () => {
  let component: AsignarPasswordComponent;
  let fixture: ComponentFixture<AsignarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
