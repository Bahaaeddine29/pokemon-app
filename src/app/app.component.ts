import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemons';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`, 
})
export class AppComponent implements OnInit {

  title: string = 'pokemon-app';
  pokemonList: Pokemon [] = POKEMONS; 

  ngOnInit (): void {

    console.log ("Je viens de charger!");
    console.table (this.pokemonList); 

    this.selectPokemon (this.pokemonList [0]); 

  }

  selectPokemon (pokemon: Pokemon): void {

    console.log ("Vous avez selectionné ce pokemon : " + pokemon.name);

  }

}
