var myCarControl = cc.Sprite.extend({
    _currentPosition: 370,
	_size: 600,
	velocidade: 0,
	_aceleracao: 0,
    ctor:function(){
        this.initWithFile("./images/carro.png");
    },
    /*
     V = S / T
     S = V * T

     A = V / T
     V = A * T


    */

    update:function(dt){
		this.setPosition(new cc.Point(this._currentPosition, this.getPosition().y));
    },
    handleKey:function(e)
    {
        if(e === cc.KEY.left) {
          	this._currentPosition = this._currentPosition - 10;
        }
        else if(e === cc.KEY.right) {
          	this._currentPosition = this._currentPosition + 10;
        }
    },
});


