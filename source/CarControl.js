var carControl = cc.Sprite.extend({
    _currentPosition:270,
	_size : 600,
    ctor:function(){
        this.initWithFile("./images/carro.png");
    },
    update:function(dt){
		this.setPosition(new cc.Point(this._currentPosition, this.getPosition().y));
    },
    handleKey:function(e)
    {
        if(e === cc.KEY.left) {
          	this._currentPosition = this._currentPosition - 10;
          	//this.validatePosition();
        }
        else if(e === cc.KEY.right) {
          	this._currentPosition = this._currentPosition + 10;
          	//this.validatePosition();
        }
    },

    handleTouch:function(touchLocation)
    {
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    },

	validatePosition:function() {
		if(this._currentPosition < 0) this._currentPosition = 0;
        if(this._currentPosition > 350) this._currentPosition = 350;
	},

    handleTouchMove:function(touchLocation){
		this._currentPosition = touchLocation.y;
		this.validatePosition();
    }
});


