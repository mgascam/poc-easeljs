/**
 * Created by miguel on 8/02/15.
 */

var ENTITY = (function () {

    var EntityClass = function(posX, posY, width, height, spriteName, zIndex){
        this.pos = {
            x: posX || 0,
            y: posY || 0
        };

        this.size = {
            x: width || 0,
            y: height || 0
        };

        this.currentSpriteName = spriteName || undefined;
        this.zIndex = zIndex || 1;

    };

    EntityClass.prototype.draw = function() {
        console.log('EntityClass Draw');
    };
    EntityClass.prototype.update = function() {
        console.log('EntityClass Update');
    };


    return {
        EntityClass: EntityClass
    }
})();