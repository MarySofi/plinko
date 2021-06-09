class Division{
    constructor(x,y,width,heigth){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,heigth,options);
        this.width=width;
        this.heigth=heigth;
        World.add(world,this.body);
    }

    display(){
        push()
        for(var k=0;k<=width;k=k+80){
            division.push(newDivision(k,heigth-divisionHeight/2,10,divisionHeight));
          }
          
        var pos=this.body.postion;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.heigth);
        pop()
    }
}