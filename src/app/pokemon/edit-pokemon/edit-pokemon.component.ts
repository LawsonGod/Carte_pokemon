import { Component,OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonFormComponent} from "../pokemon-form/pokemon-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    PokemonFormComponent,
    NgIf
  ],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon?.picture" alt="image du pokémon">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent {
  pokemon:Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
