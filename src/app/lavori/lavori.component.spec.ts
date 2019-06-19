import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoriComponent } from './lavori.component';

describe('LavoriComponent', () => {
  let component: LavoriComponent;
  let fixture: ComponentFixture<LavoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
