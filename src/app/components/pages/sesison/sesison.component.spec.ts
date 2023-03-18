import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesisonComponent } from './sesison.component';

describe('SesisonComponent', () => {
  let component: SesisonComponent;
  let fixture: ComponentFixture<SesisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
