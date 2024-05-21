import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import {PokemonService} from "./pokemon.service";
import {PokemonModule} from "./pokemon/pokemon.module";

@NgModule({
    declarations: [
      
    ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation:false }),
    AppRoutingModule,
    PokemonModule,
  ],
  providers: [PokemonService],
  bootstrap: []

})
export class AppModule { }

