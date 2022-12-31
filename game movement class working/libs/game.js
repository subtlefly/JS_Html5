class Game
{
    constructor(root, lib)
    {
        this.root = root;
        this.stage = this.root.stage;
        this.lib = lib;
        this.init();
        this.keys ={};
        this.friction = 0.95;
	this.keyForce = 50;
	this.root.player.vX = 0;
	this.root.player.vY = 0;
	this.root.player.minVX = 20;
	this.root.player.minVY = 20;



	


	//document.addEventListener("keyup", this.keyUpHandler);  
    }
    
   init(e){
		this.player = this.root.player_mc;
		
		const game = this;
		createjs.Ticker.addEventListener("tick", function(e){ game.update(e); });
		
        document.addEventListener("keydown", (e) => {
  
    console.log(`Key "${e.key}" pressed [event: keydown]`);
            this.keys[e.key] = true;
  
});
        document.addEventListener("keyup", (e) => {
  
    console.log(`Key "${e.key}" pressed [event: keydown]`);
            this.keys[e.key] = false;
  
});
		
	}
   
             


   update(e){


     
        if (this.keys.a || this.keys.ArrowLeft)
		this.root.player.vX -= this.keyForce;
	else if (this.keys.d || this.keys.ArrowRight)
		this.root.player.vX += this.keyForce;
	
	if (this.keys.w || this.keys.ArrowUp)
		this.root.player.vY -= this.keyForce;
	else if (this.keys.s || this.keys.ArrowDown)
		this.root.player.vY += this.keyForce;
	
	this.root.player.vX *= this.friction;
	this.root.player.vY *= this.friction;

	this.rotate(this.root.player);
       this.move(e, this.root.player);
      
};

rotate(){

	this.root.player.rotation = Math.atan2(this.root.player.vY, this.root.player.vX) * 180 / Math.PI;
};

move(e, player ){
this.root.player.x += this.root.player.vX * e.delta * 0.001;
this.root.player.y += this.root.player.vY * e.delta * 0.001;
}
}