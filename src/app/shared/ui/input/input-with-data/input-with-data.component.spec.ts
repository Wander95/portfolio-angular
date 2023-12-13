import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithDataComponent } from './input-with-data.component';

describe('InputWithDataComponent', () => {
  let component: InputWithDataComponent;
  let fixture: ComponentFixture<InputWithDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputWithDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
