var MobileGame = cc.LayerColor.extend({
	lane:null,
	mycar:null,
	car2:null,
	car3:null,
	car4:null,
	car5:null,
	time:0,
	velocity:0,
	distance:0,
	lblTime:null,
	lblVelocity:null,
	lblDistance:null,
	lblMsg:null,
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

		//    ctor:function(posX, posY)
        this.mycar = new myCarControl(370,070);
        this.addChild(this.mycar);
        this.mycar.scheduleUpdate();

		//    ctor:function(posX, posY, velocity, sentido)
        this.car2 = new carControl(400,100,40,"Normal");
        this.addChild(this.car2);

        this.car3 = new carControl(300,300,40,"Normal");
        this.addChild(this.car3);

        this.car4 = new carControl(550,500,40,"Normal");
        this.addChild(this.car4);

        this.car5 = new carControl(230,-300,30,"Contrario");
        this.addChild(this.car5);

        this.lblTime = cc.LabelTTF.create("", "Arial", 28);
        this.addChild(this.lblTime);
        this.lblTime.setPosition(cc.p(470, 340));

        this.lblVelocity = cc.LabelTTF.create("0", "Arial", 28);
        this.addChild(this.lblVelocity);
        this.lblVelocity.setPosition(cc.p(470, 420));
        this.lblVelocity.setColor(cc.blue());

        this.lblDistance = cc.LabelTTF.create("", "Arial", 28);
        this.addChild(this.lblDistance);
        this.lblDistance.setPosition(cc.p(470, 380));

        this.lblMsg = cc.LabelTTF.create("", "Arial", 14);
        this.addChild(this.lblMsg);
        this.lblMsg.setPosition(cc.p(100, 420));
        this.lblMsg.setColor(cc.red());

        return true;
    },
    onEnter:function(){
        this._super();
    },
    onPause:function (sender) {
        if (cc.Director.getInstance().isPaused()) {
            cc.Director.getInstance().resume();
        } else {
            cc.Director.getInstance().pause();
        }
    },
    update:function(dt){
        this.car2.update(this.lane.velocity, this.mycar.getPosition().x, this.mycar.getPosition().y);
        this.car2.setPosition(new cc.Point(this.car2.posX, this.car2.posY));
        this.car3.update(this.lane.velocity, this.mycar.getPosition().x, this.mycar.getPosition().y);
        this.car3.setPosition(new cc.Point(this.car3.posX, this.car3.posY));
        this.car4.update(this.lane.velocity, this.mycar.getPosition().x, this.mycar.getPosition().y);
        this.car4.setPosition(new cc.Point(this.car4.posX, this.car4.posY));
        this.car5.update(this.lane.velocity, this.mycar.getPosition().x, this.mycar.getPosition().y);
        this.car5.setPosition(new cc.Point(this.car5.posX, this.car5.posY));
        this.time += dt;
        this.velocity = this.lane.velocity * 10;
		this.distance += this.velocity / 3.6 * dt;
		this.showLabels();
    },
    showLabels:function(){
    	// Show datas
        this.lblTime.setString(Math.round(this.time) + " s");
        this.lblVelocity.setString(Math.round(this.velocity) + " km/h");
        this.lblDistance.setString(Math.round(this.distance) + " m");
        // Show Messages
        if(this.velocity <= 80) {
        	this.lblMsg.setString("");
            if(this.distance == 0 && this.time > 10) {
            	this.lblMsg.setString("De partida no carro");
            }
            if(this.distance > 0 && this.velocity < 40) {
            	this.lblMsg.setString("Acelera este carro");
            }
        } else {
        	if(this.velocity > 80) {
        		this.lblMsg.setString("Acima da velocidade");
        	}
        	if(this.velocity > 120) {
        		this.lblMsg.setString("Altissima velocidade");
        	}
        }
    },
    onKeyUp:function(e){
		this.mycar.handleKeyUp(e);
    },
    onKeyDown:function(e){
        this.lane.handleKeyDown(e);
        this.mycar.handleKeyDown(e);
        if(e === cc.KEY.p) {
            this.onPause();
  		}

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


