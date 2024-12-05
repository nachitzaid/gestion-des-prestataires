import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSelectionComponent } from './page_selection.component';

describe('PageSelectionComponent', () => {
  let component: PageSelectionComponent;
  let fixture: ComponentFixture<PageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
