import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon/pokemon";
import {POKEMONS} from "./pokemon/mock-pokemon-list";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //methode pour récupérer la liste de pokémon
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  //methode pour récupérer un pokémon par son id
  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  //methode pour récupérer les pokémons par type
  getPokemonTypeList(): string[] {
    return [
      'plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
