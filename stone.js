

class stoone{constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
      }
}