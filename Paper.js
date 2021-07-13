class Paper{
    constructor(x, y, radius){
       var options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
       }
       this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
       this.image = loadImage("Paper.png")
       World.add(world,this.body);
    }
    display(){
        imageMode(RADIUS);
        //fill(77, 255, 255);

        image(this.image,400,400,this.width,this.height)
    }
}