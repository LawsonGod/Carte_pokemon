import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import {BorderCardDirective} from "./border-card.directive";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BorderCardDirective],
  templateUrl: `app.component.html`,
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
      console.table(this.pokemonList);
  }

  selectPokemon(pokemonId:number){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === pokemonId); 
    if (pokemon){
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;

    }
  }
}
