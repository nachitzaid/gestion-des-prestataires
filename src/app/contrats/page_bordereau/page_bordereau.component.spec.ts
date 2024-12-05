import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBordereauComponent } from './page_bordereau.component';

describe('PageBordereauComponent', () => {
  let component: PageBordereauComponent;
  let fixture: ComponentFixture<PageBordereauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBordereauComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBordereauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
