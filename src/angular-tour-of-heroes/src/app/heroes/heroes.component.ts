import { Component, OnInit } from '@angular/core';
import { Hero } from '../HeroIntf';
import { HEROS } from './data/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public heroName = 'All modules:';
  public heros = HEROS;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHero();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Select hero id=${hero.id}`);
  }

  getHero():void{
    this.heroService.getHeroes().subscribe(heros => this.heros= heros);
  }

}
