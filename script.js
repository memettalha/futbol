//Takım 1
let count=0;
//Arttırma
document.getElementById("increaseBtn1").onclick =function(){
    count+=1;
    document.getElementById("number1").innerHTML = count;
}
//Azaltma
document.getElementById("decreaseBtn1").onclick =function(){
    count-=1;
    if(count==-1){
        count=0;
    }
    document.getElementById("number1").innerHTML = count;
}
// İsim değiştirme
function name1(){
    let isim1 = prompt("Takım ismi giriniz");
    if(isim1!==null && isNaN(isim1)){
        document.getElementById("name1").innerHTML = isim1;
    }
    else{
        alert("Lütfen isim giriniz")
    }
}

//Skor değiştirme
function run(){
    let score1 = prompt("Skor giriniz");
    if(score1 !==null && !isNaN(score1)){
        count = parseInt(score1);
        document.getElementById("number1").innerHTML = count;
    }
    else{
        alert("Lütfen sayı giriniz");
    }
}

//Takım 2
let count2=0;
//Arttırma
document.getElementById("increaseBtn2").onclick =function(){
    count2+=1;
    document.getElementById("number2").innerHTML = count2;
}
//Azaltma
document.getElementById("decreaseBtn2").onclick =function(){
    count2-=1;
    if(count2==-1){
        count2=0;
    }
    document.getElementById("number2").innerHTML = count2;
}
//İsim değiştirme
function name2(){
    let isim2 = prompt("Takım ismi giriniz");
    if(isim2!==null && isNaN(isim2)){
        document.getElementById("name2").innerHTML = isim2;
    }
    else{
        alert("Lütfen isim giriniz")
    }
}
//Skor değiştirme
function run2(){
    let score2 = prompt("Skor giriniz");
    if(score2!==null && !isNaN(score2)){
        count2 = parseInt(score2);
        document.getElementById("number2").innerHTML = count2;
    }
    else{
        alert("Lütfen sayı giriniz")
    }
}

if(count>count2){
    document.getElementById("demo").innerHTML ="önde";
}


//Müzik açma
let audio = document.getElementById("music");
let playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  isPlaying = !isPlaying;
});

//reset
let btnreset=document.getElementsByClassName("btnreset");
//Reset Butonu
function myReset(){
    count=0;
    document.getElementById("number1").innerHTML = count;
}
function myReset2(){
    count2=0;
    document.getElementById("number2").innerHTML = count2;
}

























