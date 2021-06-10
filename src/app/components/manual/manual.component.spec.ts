import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VerseComponent } from '../verse/verse.component';
import { ManualComponent } from './manual.component';

describe('ManualComponent', () => {
  let component: ManualComponent;
  let fixture: ComponentFixture<ManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualComponent, VerseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render any verses initially', () => {
    expect(
      fixture.debugElement.query(By.directive(VerseComponent))
    ).toBeFalsy();
  });

  it('should add a verse dynamically', () => {
    const animal: string = 'Dog';
    const animalSound: string = 'Woof';

    component.animal = animal;
    component.animalSound = animalSound;
    component.addAnimal();
    fixture.detectChanges();

    expect(component.farm).toEqual([[animal, animalSound]]);
    expect(
      fixture.debugElement.queryAll(By.directive(VerseComponent)).length
    ).toEqual(1);
  });
});
