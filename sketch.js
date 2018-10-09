function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  colorMode(RGB, 100)
  noStroke()
  smooth()
  frameRate(60)
  background(2)
}

var r = 9;
var incRx = 10;
var incRy = 10;
var incGx = 30;
var incGy = 10;
var incBx = 30;
var incBy = 10;


function draw() {
// variabili primo for
  var a = noise(frameCount/80)
  var b = noise(frameCount/80+100)
  var mx = map(a, 0, 1, 0, width)
  var my = map(b, 0, 1, 0, height)
  // variabili secondo for
  var c = noise(frameCount/80+600)
  var d = noise(frameCount/80+700)
  var mx2 = map(c, 0, 1, 0, width)
  var my2 = map(d, 0, 1, 0, height)
  // variabili terzo for
  var e = noise(frameCount/80+300)
  var f = noise(frameCount/80+400)
  var mx3 = map(e, 0, 1, 0, width)
  var my3 = map(f, 0, 1, 0, height)

  var v = noise(frameCount/20)*15
  var nd = 10;

  for(var x=5; x<width; x+=incRx){
    for(var y=incRy; y<height; y+=incRy){
      var d = int(dist(x, y, mx, my))
      var d2 = int(dist(x, y, mx2, my2))
      var d3 = int(dist(x, y, mx3, my3))
      var md = map(d, 25, width/v, 100, 0)
      var ma = map(d2, 25, width/v, 100, 0)
      var md3 = map(d3, 25, width/v, 100, 0)

      //var nd = map(d, 5, width/v, 0, 100)
      //fill(255,md,md)
      fill(md,ma,md3,nd)

      ellipse(x,y,r)
    }
  }








  }
