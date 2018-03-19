var starField = [];

function randomXExp(){
  return "sin(i*"+(0.5+math.floor(random(10))/2) + ")";
}

function randomYExp(){
  return "cos(i*"+(0.5+math.floor(random(10))/2) + ")";
}

function Star() {
  this.y = map(random(windowHeight), 0, windowHeight, windowHeight/10, windowHeight*10/11);;
  this.x = map(random(windowWidth), 0, windowWidth, windowWidth/20, windowWidth*12/13);
  this.opacity = 100; //random(100); //doesn't really do anything as lines overlap as phase loops.
  this.hue = random(360); //use map to delimit the hue to a bracket? potential.
  this.brushSize = random(5); 
  this.size = map(random(1),0,1,0.02,0.04);
  
  this.scopeX = { i: 0 };
  this.expressionX = randomXExp();

  this.scopeY = { i: 0 };
  this.expressionY = randomYExp();
 
  this.move = function() {
    this.scopeX.i = frameCount * this.size;
    this.scopeY.i = frameCount * this.size;
    this.x += math.eval(this.expressionX, this.scopeX);  
    this.y += math.eval(this.expressionY, this.scopeY);  
  };
  
  this.display = function(){
    stroke(this.hue,60,80,this.opacity);
    ellipse(this.x, this.y, this.brushSize);
  };
}

function populateStarField(noStars){
  starField = [];
  for (var i = 0; i < noStars; i++){
    starField.push(new Star());
  }
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(20);
  colorMode(HSB, 360, 100, 100, 100);
  populateStarField(150);
}

function draw(){
  starField.forEach(function(star) {
      star.display();
      star.move();
  });
}