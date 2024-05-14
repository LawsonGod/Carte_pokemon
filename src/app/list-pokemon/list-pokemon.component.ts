import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {CommonModule} from "@angular/common";
import {BorderCardDirective} from "../border-card.directive";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent  {
  pokemonList: Pokemon[] = POKEMONS;
}

