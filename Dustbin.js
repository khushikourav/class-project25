class Dustbin{
      constructor(x, y, width, height){
       var options = {
           isStatic : true,
           restitution : 0,
           friction : 1,
           density : 0.1
       }

       this.body = Bodies.rectangle(x, y, width, height,options);
       this.width = 150;
       this.height = 200;
       this.image = loadImage("dustbingreen.png")
       World.add(world, this.body);

      }
display(){
    imageMode(CENTER);
    fill(255);

image(this.image,700,570,this.width,this.height);    
  }
};