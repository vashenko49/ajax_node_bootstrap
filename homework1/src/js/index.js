import {FilmApi} from "./API/filmApi";
import {FilmItem} from "./item/filmItem";
import {CharactersAPI} from './API/charactersAPI'
import {CharacterItem} from "./item/characterItem";
import {DOMmanagement} from "./DOMmanagement";


window.addEventListener('load', function () {
    let film =  new FilmApi();
    let character = new CharactersAPI();
    let dom = new DOMmanagement();

    let mainLoader =  dom.generateElementt('div',['main-blobs']);
    mainLoader.appendChild(dom.renderLoader());
    document.body.appendChild(mainLoader);

    film.getFilms('https://swapi.co/api/films/')
        .then(result=>{
            mainLoader.remove();
            if(Array.isArray(result)){
                result.forEach(element=>{
                    let film = new FilmItem(element);
                    let card = film.renderCard();
                    document.body.appendChild(card);
                    Promise.all(film.characters.map(url=>{
                        return character.getCharacters(url);
                    })).then(resp=>{
                        resp =  resp.map(element =>{
                            let charac = new CharacterItem(element);
                            return charac.renderCharacter();
                        });
                        card.lastElementChild.remove();

                        resp.forEach(element=>{
                            card.appendChild(element)
                        });
                    })
                })
            }
        });
});

