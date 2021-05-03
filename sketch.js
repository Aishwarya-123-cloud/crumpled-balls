
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject,groundObject,paperObject;	
var world, engine;

function setup() {
	createCanvas(1600, 700);

     

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new PaperClass(200,450,70);
	
console.log(paperObject)
	var render = Render.create({
	 element: document.body,
	 engine:engine,
	 options:{
		 width:1600,
		 height:700,
		 wireframes : false

	 }	
	})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  

}
function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1065,y:-1065}) 
}
