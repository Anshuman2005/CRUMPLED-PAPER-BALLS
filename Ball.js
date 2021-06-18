class Ball{
    constructor(x,y,r){
    var options={
        'isStatic' : false,
        'restitution' : 0.1,
        'friction' : 0,
        'density' : 1.2

    }
    this.body = Bodies.circle(x,y,r)
    this.r = r
    World.add(world,this.body)
    }

    show(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("white");
        ellipse(pos.x,pos.y,this.r)

    }
}
