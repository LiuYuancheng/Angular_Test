import { Component, OnInit } from '@angular/core';
import { Hero } from '../HeroIntf';
import { HEROS } from './data/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public heroName = 'Windstorm';
  public heros = HEROS;

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
