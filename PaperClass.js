class PaperClass{
constructor(x,y,r){
var options ={
    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0
}
this.body = Bodies.circle(x,y,r,options)
this.r = r
this.image = loadImage("paper.png")
World.add(world,this.body)
}
display(){
var pos = this.body.position
push();
translate (pos.x,pos.y)
rotate(this.body.angle)
imageMode(RADIUS)
image(this.image,0,0,this.r,this.r)


pop();
}
}