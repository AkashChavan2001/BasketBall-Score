var goal1=document.getElementById("zero")

var score1=document.getElementById("scr")

var goal2=document.getElementById("zero1")
var score2=document.getElementById("sr")


var count=0


function zero1() {
    count=count+3

    goal1.innerHTML=count
}

function scr() {
    score1.innerHTML+=`${count}-`
    count=0
    goal1.innerHTML=count
}
var count1=0
function zero2() {
    count1=count1+2

    goal2.innerHTML=count1
}

function sr() {
    score2.innerHTML+=`${count1}-`
    count1=0
    goal2.innerHTML=count1
}

