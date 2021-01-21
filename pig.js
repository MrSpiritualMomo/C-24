class Pig{

    constructor(x,y){
        var options ={
            restitution: 0.5,
            friction: 1
        }       
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
}


display(){
push()
translate(this.body.position.x,this.body.position.y,)
rotate(this.body.angle)
 fill("green")
 stroke("white")
 strokeWeight(7)
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()
 }
 
 
}
