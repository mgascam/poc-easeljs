/**
 * Created by miguel on 8/02/15.
 */
var ReelsContainer =(function(m){

    var ReelsContainer = function(settings){
        this.posX = settings.pos.X || 0;
        this.posY = settings.pos.Y || 0;
        this.symbolList = settings.symbols || undefined;
    };

    var Reel = function(){
        console.log(m.Model.reel_configs);
    };

    return {
        ReelsContainer: ReelsContainer,
        Reel: Reel
    }
})(MODEL);