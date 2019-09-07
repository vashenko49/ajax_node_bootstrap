import {Api} from "./api";

export class CharactersAPI extends Api{
    getCharacters(url){
        return super.getUseAxios(url);
    }
}