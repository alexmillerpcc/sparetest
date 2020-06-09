let t = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1280,720);
  smooth();
  background(0);
  stroke(255);
  frameRate(1);
  textAlign(CENTER);
  //textSize(40);
  textSize(windowHeight/16);
  
  
}

function draw() {
  let x = width/2;
  let y = height/2;
  let wh = windowHeight;
  fill(255);
  
  if (t < 10){
    screenWrite("Can You Spare 8 Minutes and 46 Seconds?", x, y);

  }
  
  if (t >= 10 && t < 20){
    screenWrite("I hope you can.", x, y);
    if (t > 16){
      text("3", x - wh/7, y + wh/14);
    }
    if (t > 17){
      text("2", x, y + wh/14);
    }
    if (t > 18){
      text("1", x + wh/7, y + wh/14); 
    }
  }
  
  print("Seconds: " + t);
  t += 1;
  if (t > 20){
    background(0);
    noLoop();
  }
}

function screenWrite(words, wid, hei){
  background(0);
  text(words, wid, hei);  
} 