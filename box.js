class Box{

    constructor(x,y,width,height){
        var options ={
            restitution: 0.5,
            friction: 1
        }       
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}


display(){
push()
translate(this.body.position.x,this.body.position.y,)
rotate(this.body.angle)
 fill("white")
 stroke("orange")
 strokeWeight(10)
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()
 }
 
 
}
