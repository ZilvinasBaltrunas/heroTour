import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	/*hero: Hero = {
		id:1,
		name: 'Windstorm'
	};*/
	heroes: Hero[];

	// selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(result => this.heroes = result);
  }

  /*onSelect(hero: Hero):void {
  	this.selectedHero = hero;
  }*/
}