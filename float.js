var container = document.getElementById("container");

var target = document.createElement("img");
target.id = "target";
target.onload = function() {
    floatText();
}
target.src = "mewie.jpg";
container.appendChild(target);


function makeNewPosition() {
    var containerVspace = container.offsetHeight - target.offsetHeight,
    containerHspace = container.offsetWidth - target.offsetWidth,
    newX = Math.floor(Math.random() * containerVspace),
    newY = Math.floor(Math.random() * containerHspace);
    return [newX, newY];
}

function velocity(prev, next) { 
    var x = Math.abs(prev[1] - next[1]),
    y = Math.abs(prev[0] - next[0]),
    larger = x > y ? x : y,
    speedModifier = 0.1,
    speed = Math.ceil(larger / speedModifier);
    return speed;   
}

function floatText() {
    var newPos = makeNewPosition(), 
    oldTop = target.offsetTop, 
    oldLeft = target.offsetLeft;
     target.animate([
         { top: oldTop+"px", left: oldLeft+"px" },
         { top: newPos[0]+"px", left: newPos[1]+"px" }
         ], {
     duration: velocity([oldTop, oldLeft],newPos),
     fill: "forwards"
     }).onfinish = function() {
         floatText();
     }
 }
