var Xco, Yco,R,speed;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    Xco = width/2;
    Yco = height/2;
    R=200;
    speed= 5;
}

function draw() {
    background(220);
    Yco= Yco+speed;
   if(Yco == height+R/2){
       Yco = -R/2;
   }
    fill(255, 255, 255);
    ellipse(Xco,Yco, R);
}
