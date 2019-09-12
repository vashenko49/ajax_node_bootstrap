import $ from 'jquery';
import axios from 'axios';

export class Api {

    getUseXMLHttpRequest(url) {
        let xhr = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhr.addEventListener('loadend', function () {
                if(xhr.status===200){
                    resolve(xhr.response)
                }else{
                    reject('ERROR')
                }
            });
            xhr.open('GET', url);
            xhr.responseType = 'json';
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
            .catch(e=>{
                throw e;
            })
    }
     getUseAxios(url){
        return axios.get(url)
            .then(result =>{
                return result.data;
            })
            .catch(e=>{
                throw e;
            });
    }
    getUseJqueryGet(url){
        return new Promise(function (resolve) {
            $.get(url)
                .done(result=>{
                    resolve(result)
                }).error(e=>{
                    throw e;
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
            }).error(e=>{
                throw e;
            })
        })
    }
}