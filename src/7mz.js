var tot=0;
var actgm=0;
var player=0;
var punteggi=[];
function game(){
    if(player>0){
        punteggi[player-1]=tot;
    }
    tot=0;
    player++;
    actgm=1;
    var gi=document.getElementById("giocatore");
    gi.textContent=player;
    var el=document.getElementById("value");
    el.textContent="";
}
function pesca(){
    if(actgm==1){
    var number=getRandomInt(1,10);
    var sdnmb=getRandomInt(1,4);
    var sem=seme(sdnmb)
    var card=number+" di "+sem;
    var cardimgname=card+".png";
    var img=document.createElement("img");
    img.src="carte/"+cardimgname;
    img.alt = card;
    img.id = "card-image";
    var imgcontainer=document.getElementById("image-container");
    if (!imgcontainer) {
        imgcontainer = document.createElement("div");
        imgcontainer.id = "image-container";
        document.body.appendChild(imgcontainer);
    }
    imgcontainer.innerHTML = ""; 
    imgcontainer.appendChild(img)
    if( tot<7.5){
        tot=tot+elnb(number);
        var el=document.getElementById("value");
    el.textContent="carta pescata: "+card+" punteggio "+tot;
    var pul=document.getElementById("start");
    pul.textContent="Sto Bene";
    }
    if(tot==7.5){
        var el=document.getElementById("value");
      game();
    }
    if(tot>7.5){
        var el=document.getElementById("value");
    alert("SBALLATO");
    tot=-1;
    game()
    }
    }
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function seme(numsem){
    if(numsem==1){
        return "denari";
    }
    if(numsem==2){
        return "spade";
    }
    if(numsem==3){
        return "bastoni";
    }
    if(numsem==4){
        return "coppe";
    }
}
function elnb(number){
    if(number<8){
        return number;
    }
    if(number>=8){
        return 0.5;
    }
}
function fineGioco(){
    if(player<2){
        return 0;
    }
    var el=document.getElementById("value");
    el.textContent="";
    var gi=document.getElementById("giocatore");
    gi.textContent="";
    punteggi[player-1]=tot;
    var max=maxi(punteggi);
    for(i=0;i<player;i++){
        if(punteggi[i]==max){
            alert("ha vinto il giocatore "+i);}
        }
    for(m=0;m<player;m++){
        punteggi[i]=0;
    }
    tot=0;
    actgm=0;
    player=0;
    var pul=document.getElementById("start");
    pul.textContent="Nuovo Gioco";
    }
    




function maxi(pti) {
    var maximum = pti[0];  
    for (var i = 1; i < pti.length; i++) {
        if (pti[i] > maximum) {
            maximum = pti[i];  
        }
    }
    return maximum;
}
