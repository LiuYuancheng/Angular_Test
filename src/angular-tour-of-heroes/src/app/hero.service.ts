import { Injectable } from '@angular/core';
import { Hero } from './HeroIntf';
import { HEROS } from './heroes/data/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //return HEROS;
    const heros = of(HEROS);
    return heros
  }

}
