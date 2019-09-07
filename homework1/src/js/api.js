import $ from 'jquery';
import axios from 'axios';

export class Api {

    getUseXMLHttpRequest(url) {
        let xhr = new XMLHttpRequest();
        return new Promise(function (resolve) {
            xhr.addEventListener('loadend', function () {
                if(xhr.status===200){
                    resolve(xhr.response)
                }else{
                    console.log('ERROR');
                }
            });
            xhr.open('GET', url);
            xhr.responseType = 'json';
            xhr.send();
        });
    }

    getUseFetch(url){
        return fetch(url)
            .then(response=>{
                return response.json();
            })
            .then((res)=>{
                return res;
            })
    }
     getUseAxios(url){
        return axios.get(url)
            .then(result =>{
                return result.data;
            });
    }
    getUseJqueryGet(url){
        return new Promise(function (resolve) {
            $.get(url)
                .done(result=>{
                    resolve(result)
                })
        })
    }

    getUseJqueryAjax(url){
        return new Promise(function (resolve) {
            $.ajax({
                type:"GET",
                url
            }).done(result=>{
                resolve(result);
            })
        })
    }
}