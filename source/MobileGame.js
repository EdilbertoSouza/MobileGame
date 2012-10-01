var MobileGame = cc.LayerColor.extend({
	pistaControl:null,
	car:null,
	velo:1,
    init:function(){
        this._super();
        this.initWithColor(new cc.Color4B(0,0,0,255));
        var size = cc.Director.getInstance().getWinSize();

        this.pistaControl = new EventControl();
        //this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this.pistaControl);
        this.pistaControl.setPosition(new cc.Point(0,size.height/2));
        this.pistaControl.scheduleUpdate();
        this.schedule(this.update);

        this.car = new carControl();
        this.addChild(this.car);
        this.car.setPosition(new cc.Point(0,size.height/2));
        this.car.scheduleUpdate();

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){

    },
    onKeyUp:function(e){
    },
    onKeyDown:function(e){
        this.pistaControl.handleKey(e);
        this.car.handleKey(e);
    }
});

MobileGameScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new MobileGame();
        layer.init();
        this.addChild(layer);
    }
});


