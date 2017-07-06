import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heros',
  templateUrl: './hero.component.html',
  styleUrls: ['./heros.component.css'],
  providers: []
})
export class HerosComponent implements OnInit {

  heros: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) { }
  getHeros(): void {
    this.heroService.getHeros().then(heros => this.heros = heros);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeros();
  }
  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
