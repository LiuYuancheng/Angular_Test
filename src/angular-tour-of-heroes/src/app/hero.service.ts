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

  


}
