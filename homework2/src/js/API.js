export class Api {
    async getUseXMLHttpRequest(url) {
        let xhr = new XMLHttpRequest();
        return await new Promise(function (resolve) {
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

    async getUseFetch(url){
        let res = await fetch(url);
        return await res.json();
    }
}