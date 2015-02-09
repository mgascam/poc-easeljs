/**
 * Created by miguel on 8/02/15.
 */
var REELS =(function(s, cjs){

    var ReelsContainer = function(reelsConfig, settings, spriteAtlas, stage){
        this.posX =  0;
        this.posY =  0;
        this.reelsConfig = reelsConfig || {};
        this.spriteAtlas = spriteAtlas || null;
        this._reels = [];
        this._stage = stage;

        this._setUpReels();
        this.drawReels();
    };
    ReelsContainer.prototype._setUpReels = function(){
        console.log('Setting Up Reels');
        var reels = this.reelsConfig[0].reels;

        for (var i = 0, length = reels.length; i < length; i++ ) {
            var reel = reels[i];
            this._reels.push(new Reel(reel, this.spriteAtlas,this._stage));
        }

    };

    ReelsContainer.prototype.drawReels = function() {
        for (var reel in this._reels){
            this._stage.addChild(reel.symbols);
        }
    };

    function Reel(reel, spriteAtlas,stage){

        this.symbols = new cjs.Container();
        var y = 0;
        for (var icon in reel.icons){
            var symbol = new s.Symbol(spriteAtlas);
            symbol.y = y;
            symbol.gotoAndStop(spriteAtlas.animations[icon.value]);

            stage.addChild(symbol);
            y = y + 10;
            this.symbols.addChild(symbol);
        }
    };

    return {
        ReelsContainer: ReelsContainer,
        Reel: Reel
    }
})(SYMBOL, createjs);