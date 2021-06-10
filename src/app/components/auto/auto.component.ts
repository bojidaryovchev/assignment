import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent implements OnInit {
  farm: string[][] = [
    ['Cat', 'Meow'],
    ['Dog', 'Woof'],
    ['Goat', 'Meh'],
    ['Duck', 'Quack'],
    ['Rooster', 'Cock-a-Doodle-Doo'],
  ];

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
}
