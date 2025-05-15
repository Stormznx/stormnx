function setup() {
  createCanvas(400, 400);
  
}

let olhoX
let olhoY
function draw() {
  
  // rosto
  fill('white');
  circle(200, 200, 300);
  
  //olhos
  fill('black');
  circle(150, 150, 60);
  circle(250, 150, 60);
  
  //pupilas
  fill('purple');
  circle(150, 150, 10);
  circle(250, 150, 10);
  
  
  //nariz
  fill('orange');
  triangle(202, 184, 15, 224, 242,223);
           
  //boca
  fill('brown');
  line(120, 265, 290, 265);
  
  //cabelo
  fill('white');
  line(143, 83, 195, 8);
  
  
  //pupilas
  fill('yellow');
  stroke(blue);
  strokerWeeight(4)
  
  
  
  if(mouseIsPressed){
     console.log(mouseX,mouseY);
    
     } 
     
}