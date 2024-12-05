import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocieteListComponent } from './society-list.component';

describe('SocietyListComponent', () => {
  let component: SocieteListComponent;
  let fixture: ComponentFixture<SocieteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocieteListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocieteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
