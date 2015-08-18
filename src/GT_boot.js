var GT = GT || {};

GT.Boot = function() {};

GT.Boot.prototype = {
     preload: function() {
         this.game.load.image('loading', 'assets/preload.png');
     },
    create: function() {   
        this.game.state.start('Preload');
    }
    
}