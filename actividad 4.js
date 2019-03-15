function setup() {
  createCanvas(500,500);
}
function draw() {
background(0);
    for(var x = 5; x <=495; x = x + 10){
    for(var y = 5; y <=495; y = y + 10){
         ellipse(x,y, 10, 10);
        fill(0,255,0)
    }
    }
    
    
}