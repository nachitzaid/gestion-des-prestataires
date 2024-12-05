import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailogComponent } from './dailog.component';

describe('DailogComponent', () => {
  let component: DailogComponent;
  let fixture: ComponentFixture<DailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
