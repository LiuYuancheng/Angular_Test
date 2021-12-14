import { Injectable } from '@angular/core';
import { Hero } from './HeroIntf';
import { HEROS } from './heroes/data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
  //   //return HEROS;
  //   const heros = of(HEROS);
  //   return heros
  // }

  getHeroes(): Observable<Hero[]> {
    //return HEROS;
    const heros = of(HEROS);
    this.messageService.add('HeroService: fetched heroes');
    return heros
  }

  getHero(id: Number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }


}
