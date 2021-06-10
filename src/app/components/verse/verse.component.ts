import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
})
export class VerseComponent implements OnInit {
  @Input() animal: string | undefined;
  @Input() animalSound: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
