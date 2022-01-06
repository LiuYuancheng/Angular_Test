import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './HeroIntf';
import { HEROS } from './heroes/data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http:HttpClient,
    private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
  //   //return HEROS;
  //   const heros = of(HEROS);
  //   return heros
  // }
  private log(msg:string){
    this.messageService.add(`Detection Service msg: ${msg}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getHeroes(): Observable<Hero[]> {
    //return HEROS;
    const heros = of(HEROS);
    this.messageService.add('Detection Service msg: fetched urls data set');
    return this.http.get<Hero[]>(this.heroUrl).pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  public getHero(id: Number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    //const hero = HEROS.find(h => h.id === id)!;
    //this.messageService.add(`Modules Management Service: Apply module id=${id}`);
    //return of(hero);
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched detection result id=${id}`)),
      catchError(this.handleError<Hero>(`getModule id=${id}`))
    );
  }


  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated new module id=${hero.id}`)),
      catchError(this.handleError<any>('update module'))
    );
  }


}
