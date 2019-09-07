import {DOMmanagement} from "../DOMmanagement";

export class CharacterItem {
    constructor({name, gender}){
        this.name = name;
        this.gender = gender;
    }

    renderCharacter(){
        let domMeneger = new DOMmanagement();
        return  domMeneger.generateElementt('p',['card-character'],`${this.name} ${this.gender}`);
    }
}