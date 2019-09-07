import {FilmApi} from "./filmApi";
import {DOMmanagement} from "./DOMmanagement";

let get = new FilmApi();

let loader = new DOMmanagement();



document.body.appendChild(loader.renderLoader());

console.log(get.getFilms('https://swapi.co/api/films/'));

console.log(get.getCharacters('https://swapi.co/api/people/1/'));