import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeContratsComponent } from './liste_contrats.component';

describe('ListeContratsComponent', () => {
  let component: ListeContratsComponent;
  let fixture: ComponentFixture<ListeContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeContratsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
