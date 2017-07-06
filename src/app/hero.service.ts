import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROS } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(HEROS), 5000);
        });
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeros()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}