//import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'hero-detail',
    templateUrl: `./hero-detail.component.html`,
    styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;

    ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
}
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
    this.location.back();
}

save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}




}