class Paper {
    constructor(x, y) {
      var options = {
          restitution:0.5,
          friction:1.0,
          density:1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      ellipse(0,0,this.width,this.height);
      pop();
    }
    keyPresed(){
      if(keyPresed === "space"){
          Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
      }
    }
  }