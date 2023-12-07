import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferPocComponent } from './defer-poc.component';

describe('DeferPocComponent', () => {
  let component: DeferPocComponent;
  let fixture: ComponentFixture<DeferPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeferPocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
