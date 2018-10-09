function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  colorMode(HSB, 100)
  noStroke()
  smooth()
  frameRate(60)
  background(10)
}

var r = 9;
var incRx = 10;
var incRy = 10;
var incGx = 30;
var incGy = 10;
var incBx = 30;
var incBy = 10;


function draw() {
  // var mx = mouseX;
  // var my = mouseY;

  var a = noise(frameCount/100)
  var b = noise(frameCount/100+100)
  var mx = map(a, 0, 1, 0, width)
  var my = map(b, 0, 1, 0, height)
  var v = noise(frameCount/20)*15

  var nd = 50;

  for(var x=5; x<width; x+=incRx){
    for(var y=incRy; y<height; y+=incRy){
      var d = int(dist(x, y, mx, my))
      var md = map(d, 25, width/v, 0, 90)
      //var nd = map(d, 5, width/v, 0, 100)
      //fill(255,md,md)
      fill(md,md,nd)

      ellipse(x,y,r)
    }
  }

  }
