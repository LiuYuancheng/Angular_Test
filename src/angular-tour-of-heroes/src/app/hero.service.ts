import { Injectable } from '@angular/core';
import { Hero } from './HeroIntf';
import { HEROS } from './heroes/data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROS;
  }

}
