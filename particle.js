class Particles{
    constructor(x,y,width,heigth){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,this.radius,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
}