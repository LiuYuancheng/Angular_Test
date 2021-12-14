import { Component, OnInit } from '@angular/core';
import { Hero } from '../HeroIntf';
import { HEROS } from './data/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public heroName = 'Windstorm';
  public heros = HEROS;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHero();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  getHero():void{
    this.heroService.getHeroes().subscribe(heros => this.heros= heros);
  }

}
