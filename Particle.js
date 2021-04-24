class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        if(frameCount%60===0){
          particles.push(new Particle(random(width/2-10,width/2+10),10,10))
        }
       
        push();
        translate(pos.x, pos.y);
        //this.color=this.color[ random("pink") ,random("blue") , random("yellow")]
        rotate(angle);
       //fill("pink")
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}