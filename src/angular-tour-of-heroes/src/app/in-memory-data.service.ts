import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './HeroIntf';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Phishing Pedia' },
      { id: 12, name: 'Newly Registered Domains' },
      { id: 13, name: 'Heuristic Filter' },
      { id: 14, name: 'Lexical Model - Spark ML' },
      { id: 15, name: 'Phishing Model' },
      { id: 16, name: 'NLP - Deep Learning' },
      { id: 17, name: 'CV - Deep Learning' },
      { id: 18, name: 'Benign Filter' },
      { id: 19, name: 'Facebook detectron2 AI' },
      { id: 20, name: 'zvelo AI ' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}