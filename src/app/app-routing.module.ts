import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";

//système de délaration des routes
const routes: Routes = [

];


@NgModule({
    imports: [RouterModule.forRoot(routes, )],
    exports: [RouterModule]
})

export class AppRoutingModule { }

