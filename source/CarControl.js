var carControl = cc.Sprite.extend({
    _currentPosition:270,
	_size : 600,
	velocidade: 0,
    ctor:function(){
        this.initWithFile("./images/car.png");
    },
/*    update:function(dt){
//		this.setPosition(new cc.Point(this._currentPosition, this.getPosition().y));
//    },
    handleKey:function(e)
    {
        if(e === cc.KEY.left) {
          	this._currentPosition = this._currentPosition - 10;
        }
        else if(e === cc.KEY.right) {
          	this._currentPosition = this._currentPosition + 10;
        }
    },
   */
});


