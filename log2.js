class Log2 {
    constructor(x, y,width, height) {
      var options = {
          isStatic:true,
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      stroke("gold");
      strokeWeight(4);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }