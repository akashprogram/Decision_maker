var randomnumber1=Math.random();
randomnumber1= Math.floor(randomnumber1*6)+1;
var randomimg= "img/dice"+randomnumber1+".png"
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimg);



var randomnumber2=Math.random();
randomnumber2= Math.floor(randomnumber2*6)+1;
var randomimg2= "img/dice"+randomnumber2+".png"
var image= document.querySelectorAll("img")[1];
image.setAttribute("src", randomimg2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 is Winner😁"
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 is Winner😁"
}else{
    document.querySelector("h1").innerHTML="Draw 😐";
}
