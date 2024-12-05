import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPrestataireComponent } from './all-prestataire.component';

describe('AllPrestataireComponent', () => {
  let component: AllPrestataireComponent;
  let fixture: ComponentFixture<AllPrestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPrestataireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
