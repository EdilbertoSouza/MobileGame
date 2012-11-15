var carControl = cc.Sprite.extend({
	initX:0,
	initY:0,
    posX:0,
	posY:0,
	velocidade: 0,
	sentido:"Normal",
	tamanhoFaixa:60,
	fator:1,
    ctor:function(posX, posY, velocidade, sentido) {
        this.initX = this.posX = posX;
        this.initY = this.posY = posY;
        this.velocidade = velocidade / 10;
        if(sentido !== null) this.sentido = sentido;
		this.setPosition(new cc.Point(this.initX, this.initY));
        if(this.sentido == "Normal"){
        	this.initWithFile("./resource/images/carControl.png");
        } else { // Contrario
        	this.initWithFile("./resource/images/carControl2.png");
        }
    },
	validatePosition:function() {
        if(this.sentido == "Normal") {
	   		if(this.posY < -070) {
	   			this.posX = this.initX + (this.gerarNumero(1, 3) * 15 * this.fator);
	   			this.posY = 670;
	   		}
    	    if(this.posY > 670)  this.posY = -070;
	   		if(this.posX < 270)  this.posX = 270;
	   		if(this.posX > 270 + this.tamanhoFaixa)  this.posX = 270 + this.tamanhoFaixa;
        } else { // contrário
	   		if(this.posY < -500) {
	   			this.posX = this.initX + (this.gerarNumero(1, 3) * 15 * this.fator);
	   			this.posY = 670;
	   		}
        	if(this.posY > 670)  this.posY = -500;
	   		if(this.posX < 230)  this.posX = 230;
	   		if(this.posX > (230 + this.tamanhoFaixa))  this.posX = (230 + this.tamanhoFaixa);
        }
        this.fator = this.fator * -1;
    },
	testCollisionX:function(myCarPos, pos) {
		if(myCarPos-35 <=pos-10 && pos+10 <=myCarPos+35) {
			return true;
		}
		return false;
	},
	testCollisionY:function(myCarPos, pos) {
		if(myCarPos-67 <=pos-11 && pos+11 <=myCarPos+67) {
			return true;
		}
		return false;
	},
	collision:function(myCarPosX, myCarPosY) {
		if(this.testCollisionX(myCarPosX, this.posX) && this.testCollisionY(myCarPosY, this.posY)) {
		  	alert("Colidiu");
		  	return true;
		}
		return false;
    },
	gerarNumero:function(limiteInferior, limiteSuperior) {
		numPossibilidades = limiteSuperior - limiteInferior;
		aleat = Math.random() * numPossibilidades;
		aleat = Math.floor(aleat);
		if(aleat < limiteInferior) aleat = limiteInferior;
		if(aleat > limiteSuperior) aleat = limiteSuperior;
		return aleat;
	},
    update:function(laneVelocidade, myCarPosX, myCarPosY) {
        if(this.sentido == "Normal"){
			this.posY = this.posY - laneVelocidade + this.velocidade;
    	} else { // contrário
    		this.posY = this.posY - laneVelocidade + this.velocidade;
    		if(laneVelocidade == 0) this.posY = this.initY;
    	}
		this.validatePosition();
		this.collision(myCarPosX, myCarPosY);
		//this.setPosition(new cc.Point(this.initX, this.initY));
    },
});


