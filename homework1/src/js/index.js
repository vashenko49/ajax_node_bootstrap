import {Api} from "./api";

let get = new Api();

// let response = get.getUseXMLHttpRequest('https://swapi.co/api/films/');
// let response = get.getUseFetch('https://swapi.co/api/films/');
// let response = get.getUseAxios('https://swapi.co/api/films/');
let responsefilm = get.getUseJqueryAjax('https://swapi.co/api/films/');
let response = get.getUseJqueryGet('https://swapi.co/api/people/1/');

response
    .then((response)=> {
        console.log(response);
    })
    .finally(response=>{
        console.log('finally');
    });

responsefilm
    .then((response)=> {
        console.log(response.results);
    })
    .finally(response=>{
        console.log('finally');
    });