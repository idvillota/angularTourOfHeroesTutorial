import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){    
  }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }  

}
