import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VerseComponent } from '../verse/verse.component';
import { AutoComponent } from './auto.component';

describe('AutoComponent', () => {
  let component: AutoComponent;
  let fixture: ComponentFixture<AutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoComponent, VerseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a verse for each animal in the farm', () => {
    const farm: string[][] = [
      ['Hen', 'Cluck'],
      ['Parrot', 'Squawk'],
    ];

    component.farm = farm;
    fixture.detectChanges();

    const children: DebugElement[] = fixture.debugElement.queryAll(
      By.directive(VerseComponent)
    );

    expect(children.length).toEqual(2);

    const verseComponents: VerseComponent[] = children.map(
      (debugElement) => debugElement.componentInstance as VerseComponent
    );

    expect(verseComponents[0].animal).toEqual(farm[0][0]);
    expect(verseComponents[0].animalSound).toEqual(farm[0][1]);

    expect(verseComponents[1].animal).toEqual(farm[1][0]);
    expect(verseComponents[1].animalSound).toEqual(farm[1][1]);
  });
});
