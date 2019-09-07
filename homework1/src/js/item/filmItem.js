import {DOMmanagement} from "../DOMmanagement";

export class FilmItem {
    constructor({episode_id, title, opening_crawl, characters}){
        this.opening_crawl = opening_crawl;
        this.title = title;
        this.episode_id = episode_id;
        this.characters = characters;
    }
    renderCard(object){
        let domMeneger = new DOMmanagement();
        let card = domMeneger.generateElementt('div',['card']);
        for(let text in this){
            if(text === 'characters') break;
            card.appendChild(domMeneger.generateElementt('p',['card-text'],this[text]));
        }
        card.appendChild(domMeneger.renderLoader());
        return card;
    }
}