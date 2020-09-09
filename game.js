const btn = document.querySelector(".donot");
const clicks = 0;

function over(){
    var X,Y;
    var wid = window.innerWidth;
    var htg = window.innerHeight;
    do{
        X = (Math.floor(Math.random()*(wid - btn.clientWidth)+1));
        Y = (Math.floor(Math.random()*(htg - btn.clientHeight)+1));
    }while( (X>=wid) && (Y>=htg) );
    btn.style.setProperty("left",X+"px");
    btn.style.setProperty("top",Y+"px");
    console.log(X+","+Y);
}

function stilldid(){
    window.open("./result.html","_self");
}