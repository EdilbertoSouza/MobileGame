var laneControl = cc.Sprite.extend({
    currentPosition:460,
	// _size : cc.Director.getInstance().getWinSize(),
	size: 600,
	aceleracao: 0.1,
	frenagem: 0.4,
	velmax:18,
	velocity: 0,
	tempo: 0,
	tempoace: 0,
	tempofre: 0,
    ctor:function(ptext){
        this.initWithFile("./resource/images/laneControl.png");
    },
    update:function(dt){
		this.handleKeyDown();
		this.movimente();
    },
    handleKeyDown:function(e)
    {
        if(e === cc.KEY.up) {
            this.tempoace++;
            //this.tempofre=0;
        }
        if(e === cc.KEY.down) {
  			this.tempofre++;
  		}
    },
    movimente:function(dt){
    	this.tempo++;
		this.velocity = (this.aceleracao * this.tempoace) - (this.frenagem * this.tempofre);
		if(this.velocity > this.velmax) this.velocity = this.velmax;
		if(this.velocity < 0) {
			this.velocity = 0;
			this.tempoace = 0;
			this.tempofre = 0;
		}
       	this.currentPosition -= this.velocity;
		this.setPosition(new cc.Point(270, this.currentPosition));
		this.validatePosition();
    },
	validatePosition:function() {
		if(this.currentPosition < 170) this.currentPosition = 460;
        if(this.currentPosition > 460) this.currentPosition = 170;
	},
});

