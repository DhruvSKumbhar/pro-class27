class Chain
{
  constructor(bodyA,bodyB)
  {
    var c_option={
        bodyA: bodyA,
        bodyB:bodyB,
        stifness:0.04,
        length:10
    }
    this.chain = Constraint.create(c_option);
    World.add(world,this.chain);
  }
  display()
  {
      var pointA=this.chain.bodyA.position;
      var pointB=this.chain.bodyB.position;

    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}