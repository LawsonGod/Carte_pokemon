import { Component,OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AppRoutingModule} from "../../app-routing.module";
import {checkCommonJSModules} from "@angular-devkit/build-angular/src/tools/esbuild/commonjs-checker";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent,
    NgIf,
    NgOptimizedImage,
    AppRoutingModule,
  ],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="image du pokémon">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon:Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      // Gérer le cas où pokemonId est null
      this.pokemon = undefined;
    }
  }
}
