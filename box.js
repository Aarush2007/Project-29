class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}