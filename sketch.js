let r=255;
let g=255;
let b=255;
let diameter=30;
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
}
function draw(){
    circle(mouseX,mouseY,diameter);
    noStroke();
    fill(r ,g ,b , 100);
}
function mousePressed(){
    r=random(100,255);
    g=random(100,255);
    b=random(100,255);
}