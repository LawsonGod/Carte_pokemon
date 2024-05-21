import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {CommonModule} from "@angular/common";
import {BorderCardDirective} from "../border-card.directive";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {RouterOutlet, Router} from "@angular/router";
import {PokemonService} from "../../pokemon.service";
import {HttpClientModule} from "@angular/common/http";




@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet, HttpClientModule, ],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit  {
  pokemonList: Pokemon[];

  constructor(private router: Router,
              private pokemonService: PokemonService,
              ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

    goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemon', pokemon.id]);
    }
}

