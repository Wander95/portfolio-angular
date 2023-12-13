import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithButtonComponent } from './sign-in-with-button.component';

describe('SignInWithButtonComponent', () => {
  let component: SignInWithButtonComponent;
  let fixture: ComponentFixture<SignInWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWithButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
