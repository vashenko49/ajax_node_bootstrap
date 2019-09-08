function readCookie(name){
    if(name){
        let allCookie = document.cookie;
        let pos = allCookie.indexOf(name+"=");
        return pos !== -1;
    }else {
        return false;
    }
}
window.addEventListener('load', function () {
    let btn = document.getElementById('contact-us');

    btn.addEventListener('click', function (e) {
        document.cookie = 'experiment=novalue; max-age=300';
        let oneYear = new Date();
        oneYear.setFullYear(oneYear.getFullYear()+1);

        let newUser =readCookie('new-user');
        if(newUser){
            document.cookie=`new-user=false; expires=${oneYear.toGMTString()}`;
        }
        else {
            document.cookie=`new-user=true; expires=${oneYear.toGMTString()}`;
        }
    });
});

