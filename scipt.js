function bmi(){

let w=document.getElementById("weight").value;
let h=document.getElementById("height").value/100;

let result=w/(h*h);

document.getElementById("bmiResult").innerHTML=
"BMI: "+result.toFixed(2);

}

function water(){

let w=document.getElementById("waterWeight").value;

let intake=(w*0.033).toFixed(2);

document.getElementById("waterResult").innerHTML=
"Drink about "+intake+" liters daily";

}

function yt(){

let topic=document.getElementById("topic").value;

let titles=[
"10 Things You Didn't Know About "+topic,
"The Truth About "+topic,
"Beginner Guide to "+topic,
"I Tried "+topic+" For 7 Days",
"Why Everyone Is Talking About "+topic
];

let random=titles[Math.floor(Math.random()*titles.length)];

document.getElementById("ytResult").innerHTML=random;

}
