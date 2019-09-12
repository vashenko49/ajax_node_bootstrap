import {Api} from "./api";

export class FilmApi extends Api{
    getFilms(url){
        //можно менять способ получения данных
         return  super.getUseAxios(url).then((response)=> {
             return response.results;
         }).catch(e=>{
             throw  e;
         })
    }
}