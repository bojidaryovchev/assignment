import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
})
export class ManualComponent implements OnInit {
  farm: string[][] = [];
  animal: string = '';
  animalSound: string = '';

  constructor() {}

  ngOnInit(): void {}

  getAnimal(farmEntry: string[]): string {
    const [animal] = farmEntry;
    return animal;
  }

  getAnimalSound(farmEntry: string[]): string {
    const [_, animalSound] = farmEntry;
    return animalSound;
  }

  addAnimal(): void {
    this.farm.push([this.animal, this.animalSound]);

    this.animal = '';
    this.animalSound = '';
  }
}
