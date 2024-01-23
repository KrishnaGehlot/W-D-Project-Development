let a  = setInterval(work)
up=0
function work(){
    let b  = new Date();
    let c = (b.getMinutes()) ;
    
    document.getElementById("mintes").innerHTML = c;
}
let b  = setInterval(work01)
up=0
function work01(){
    let b  = new Date();
    let c = (b.getHours()) ;
    
    document.getElementById("hour01").innerHTML = c;
}

let c  = setInterval(work02)
up=0
function work02(){
    let b  = new Date();
    let c = (b.getSeconds()) ;
    
    document.getElementById("second01").innerHTML = c;
}

 time  = setInterval(counts)
tim = 0;

function counts(){
    let counts = document.getElementById("one001").innerHTML = ++tim

    if(tim == 10000){
        clearInterval(time);

    }
} 

timer  = setInterval(count12)
tims = 0;

function count12(){
    let coun = document.getElementById("one002").innerHTML = ++tims

    if(tims == 100){
        clearInterval(timer);

    }
} 

timers  = setInterval(count123)
timss = 0;

function count123(){
    let coun = document.getElementById("one003").innerHTML = ++timss

    if(timss == 1000){
        clearInterval(timers);

    }
} 

 countts  = setInterval(count1234)
timses = 0;

function count1234(){
    let coun = document.getElementById("one004").innerHTML = ++timses

    if(timss == 100){
        clearInterval(countts);

    }
} 