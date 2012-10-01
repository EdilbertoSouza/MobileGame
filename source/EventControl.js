var EventControl = cc.Sprite.extend({
    _currentPosition:460,
	// _size : cc.Director.getInstance().getWinSize(),
	_size: 600,
	_aceleracao: 0,
    ctor:function(ptext){
        this.initWithFile("./images/pista_2.png");
        /*
        this.schedule(function() {
          	this.setPosition(new cc.Point(this.getPosition().x, this.getPosition().y + 10));
          	this.validatePosition();
        });
        */
    },
    update:function(dt){
		this.movimente();
		this.handleKey();
    },
    movimente:function(dt){
       	this._currentPosition = this._currentPosition - (1 * this._aceleracao);
		this.setPosition(new cc.Point(270, this._currentPosition));
		this.validatePosition();
    },
    handleKey:function(e)
    {
        if(e === cc.KEY.up) {
  			this._aceleracao = this._aceleracao + 0.2;
  			if(this._aceleracao > 30) this._aceleracao = 30;
		    this._currentPosition = this._currentPosition - (1 + this._aceleracao);
        }
        if(e === cc.KEY.down) {
  			this._aceleracao = this._aceleracao - 1.0;
  			if(this._aceleracao < 0) this._aceleracao = 0;
            //this._currentPosition = this._currentPosition - (1 - this._aceleracao);
  		}
		/*
        if(e === cc.KEY.left) {
            this._currentPosition = this._currentPosition - 10;
        }
        if(e === cc.KEY.right) {
            this._currentPosition = this._currentPosition + 10;
        }
        */
		this.validatePosition();
    },

	validatePosition:function() {
		if(this._currentPosition < 140) this._currentPosition = 460;
        if(this._currentPosition > 460) this._currentPosition = 140;
	},
});

