import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon/pokemon";
import { HttpClient } from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";


@Injectable({providedIn: 'root'})

export class PokemonService {

  constructor(private http: HttpClient) { }

  //methode pour récupérer la liste de pokémon
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
    );
  }
  //methode pour récupérer un pokémon par son id
  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined ))
    );
  }

 private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
 }

 private handleError(error: any, errorValue: any) {
    console.error(error);
    return of(errorValue);
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
