class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.launcher1 = loadImage("images/boy.png");
        this.launcher2 = loadImage("images/stone.png");
        this.launcher3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.launcher.bodyA = null;
    }

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3); 
            image(this.launcher3, pointA.x-30,pointA.y-10,20,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.launcher3,pointA.x+25,pointA.y-10,20,30);
        }
        pop();
    }
    }
    
}