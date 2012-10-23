var MobileGame = cc.LayerColor.extend({
	lane:null,
	mycar:null,
	car2:null,
	car3:null,
	car4:null,
	car5:null,
	lbl1:null,
    init:function(){
        this._super();
        this.initWithColor(new cc.Color4B(0,0,0,255));
        this.setPosition(new cc.Point(0,0));
        var size = cc.Director.getInstance().getWinSize();

        //this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.lane = new laneControl();
        this.addChild(this.lane);
        this.lane.setPosition(new cc.Point(0,size.height/2));
        this.lane.scheduleUpdate();
        this.schedule(this.update);

        this.mycar = new myCarControl();
        this.addChild(this.mycar);
        this.mycar.setPosition(new cc.Point(0,070));
        this.mycar.scheduleUpdate();

        this.car2 = new carControl();
        this.addChild(this.car2);
        this.car2.setPosition(new cc.Point(300,100));
        this.car2.velocidade = 2;
        this.car2.scheduleUpdate();

        this.car3 = new carControl();
        this.addChild(this.car3);
        this.car3.setPosition(new cc.Point(300,300));
        this.car3.velocidade = 2;
        this.car3.scheduleUpdate();

        this.car4 = new carControl();
        this.addChild(this.car4);
        this.car4.setPosition(new cc.Point(300,500));
        this.car4.velocidade = 2;
        this.car4.scheduleUpdate();

        this.car5 = new carControl();
        this.addChild(this.car5);
        this.car5.setPosition(new cc.Point(220,-300));
        this.car5.velocidade = 1;
        this.car5.scheduleUpdate();

        //this.lbl1 = new LabelAtlasTest();
        //this.addChild(this.lbl1);

        return true;
    },
    onEnter:function(){
        this._super();
    },
	validatePosition:function() {
		if(this.car2.getPosition().y < 000)	this.car2.setPosition(new cc.Point(this.car2.getPosition().x, 600));
        if(this.car2.getPosition().y > 600) this.car2.setPosition(new cc.Point(this.car2.getPosition().x, 000));
		if(this.car3.getPosition().y < 000)	this.car3.setPosition(new cc.Point(this.car3.getPosition().x, 600));
        if(this.car3.getPosition().y > 600) this.car3.setPosition(new cc.Point(this.car3.getPosition().x, 000));
		if(this.car4.getPosition().y < 000)	this.car4.setPosition(new cc.Point(this.car4.getPosition().x, 600));
        if(this.car4.getPosition().y > 600) this.car4.setPosition(new cc.Point(this.car4.getPosition().x, 000));
		if(this.car5.getPosition().y < -1300) this.car5.setPosition(new cc.Point(this.car5.getPosition().x, 600));
        if(this.car5.getPosition().y > 600) this.car5.setPosition(new cc.Point(this.car5.getPosition().x, -1300));
	},
    update:function(dt){
		this.car2.setPosition(new cc.Point(this.car2.getPosition().x, this.car2.getPosition().y - this.lane.velocidade + this.car2.velocidade));
		this.car3.setPosition(new cc.Point(this.car3.getPosition().x, this.car3.getPosition().y - this.lane.velocidade + this.car3.velocidade));
		this.car4.setPosition(new cc.Point(this.car4.getPosition().x, this.car4.getPosition().y - this.lane.velocidade + this.car4.velocidade));
		this.car5.setPosition(new cc.Point(this.car5.getPosition().x, this.car5.getPosition().y - this.lane.velocidade - this.car5.velocidade));
		this.validatePosition();
    },
    onKeyUp:function(e){
    },
    onKeyDown:function(e){
        this.lane.handleKey(e);
        this.mycar.handleKey(e);
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


