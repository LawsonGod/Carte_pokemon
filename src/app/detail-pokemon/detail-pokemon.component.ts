import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BorderCardDirective} from "../border-card.directive";
import {PokemonTypeColorPipe} from "../pokemon-type-color.pipe";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, RouterOutlet],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent {

}
