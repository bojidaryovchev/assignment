import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerseComponent } from './verse.component';

describe('VerseComponent', () => {
  let component: VerseComponent;
  let fixture: ComponentFixture<VerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a verse using the provided animal and animal sound', () => {
    const animal: string = 'Cat';
    const animalSound: string = 'Meow';

    component.animal = animal;
    component.animalSound = animalSound;
    fixture.detectChanges();

    const expectedVerse: string = `Old MacDonald had a farm, E I E I O,And on his farm he had a ${animal}, E I E I O,With a ${animalSound} ${animalSound} here and a ${animalSound} ${animalSound} there,Here a ${animalSound}, there a ${animalSound}, ev'rywhere a ${animalSound} ${animalSound}.Old MacDonald had a farm, E I E I O.`;

    expect(fixture.nativeElement.textContent).toEqual(expectedVerse);
  });
});
