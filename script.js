function bmi(){

let w=document.getElementById("weight").value
let h=document.getElementById("height").value/100

let result=w/(h*h)

document.getElementById("bmiResult").innerText="BMI: "+result.toFixed(2)

}



function ageCalc(){

let dob=new Date(document.getElementById("dob").value)

let today=new Date()

let age=today.getFullYear()-dob.getFullYear()

document.getElementById("ageResult").innerText="Age: "+age

}



function percentage(){

let total=document.getElementById("total").value

let obtained=document.getElementById("obtained").value

let percent=(obtained/total)*100

document.getElementById("percentResult").innerText=percent.toFixed(2)+"%"

}



function generatePassword(){

let chars="abcdefghijklmnopqrstuvwxyz0123456789"

let pass=""

for(let i=0;i<10;i++){

pass+=chars[Math.floor(Math.random()*chars.length)]

}

document.getElementById("passwordResult").innerText=pass

}



function searchTools(){

let input=document.getElementById("search").value.toLowerCase()

let tools=document.getElementsByClassName("tool")

for(let i=0;i<tools.length;i++){

let title=tools[i].getElementsByTagName("h3")[0].innerText.toLowerCase()

if(title.includes(input)){

tools[i].style.display=""

}else{

tools[i].style.display="none"

}

}

}
