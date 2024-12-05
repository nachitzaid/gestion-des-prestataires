import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCreationComponent } from './page_creation.component';

describe('PageCreationComponent', () => {
  let component: PageCreationComponent;
  let fixture: ComponentFixture<PageCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
