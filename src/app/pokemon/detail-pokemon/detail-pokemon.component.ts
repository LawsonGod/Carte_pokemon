import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BorderCardDirective} from "../border-card.directive";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../../pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {AppModule} from "../../app.module";

@Component({
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet, RouterLink, HttpClientModule],
  selector: 'app-detail-pokemon',
  standalone: true,
  styles: ``,
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
      private route:ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService,
      ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}


