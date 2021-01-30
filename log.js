class Log{
constructor(x, y, height,angle) {
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'frictionAir': 0.4,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width =20;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    console.log(angle);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    fill(255);
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(5);
    stroke("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
}