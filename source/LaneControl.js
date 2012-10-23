var laneControl = cc.Sprite.extend({
    currentPosition:460,
	// _size : cc.Director.getInstance().getWinSize(),
	size: 600,
	aceleracao: 0.1,
	frenagem: 0.4,
	velocidade: 0,
	tempo: 0,
	tempoace: 0,
	tempofre: 0,
    ctor:function(ptext){
        this.initWithFile("./images/pista_2.png");
    },
    /*
     V = S / T
     S = V * T

     A = V / T
     V = A * T
    */
    update:function(dt){
		this.handleKey();
		this.movimente();
    },
    handleKey:function(e)
    {
        if(e === cc.KEY.up) {
            this.tempoace++;
            //this.tempofre=0;
        }
        if(e === cc.KEY.down) {
  			this.tempofre++;
  		}
        if(e === cc.KEY.pause) {
            alert("Em pausa");
  		}
    },
    movimente:function(dt){
    	this.tempo++;
		this.velocidade = (this.aceleracao * this.tempoace) - (this.frenagem * this.tempofre);
		if(this.velocidade > 3) this.velocidade = 3;
		if(this.velocidade < 0) {
			this.velocidade = 0;
			this.tempoace = 0;
			this.tempofre = 0;
		}
       	this.currentPosition -= this.velocidade;
		this.setPosition(new cc.Point(270, this.currentPosition));
		this.validatePosition();
    },
	validatePosition:function() {
		if(this.currentPosition < 140) this.currentPosition = 460;
        if(this.currentPosition > 460) this.currentPosition = 140;
	},
});

