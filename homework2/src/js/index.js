import {Api} from "./API.js"



window.addEventListener('load', function () {
   let btn = document.getElementById('calculate-IP');
   let ul = document.createElement('ul');
   btn.after(ul);

   btn.addEventListener('click', async function f() {
      let api = new Api();

      let respIP = await api.getUseFetch('https://api.ipify.org/?format=json');
      console.log(respIP);
      //district ничего не выводит
      let calculate = await api.getUseXMLHttpRequest(   `http://ip-api.com/json/${respIP.ip}?lang=ru&fields=continent,country,region,city,district`);
      let response = "";
      for(let key in calculate){
         response+=`<li>${key}: ${calculate[key]}</li>`
      }
      ul.innerHTML = response;

   });
});