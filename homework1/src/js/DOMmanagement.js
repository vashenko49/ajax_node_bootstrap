
export class DOMmanagement {
    renderLoader(){
        let loader = this.generateElementt('div', ['blobs']);
        loader.appendChild(this.generateElementt('div',['blob-center']));
        for(let i = 0;i<6;i++){
            loader.appendChild(this.generateElementt('div',['blob']));
        }
        return loader;
    }

    generateElementt(tag, classes){
        let elenent = document.createElement(tag);
        if(Array.isArray(classes)){
            elenent.classList.add(...classes)
        }
        return elenent;
    }

}