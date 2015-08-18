var GT = GT || {};

GT.Preload = function() {};

GT.Preload.prototype = {
    preload: function() {
        var loadingBar = this.add.sprite(400, 386, 'loading');
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar);
        
        this.load.image('GROUP', 'assets/group_button.png');
        this.load.image('SCORE', 'assets/score_ticker.png');
        this.load.image('DEAL', 'assets/deal.png');
        this.load.image('Score1', 'assets/score.png');
        this.load.image('easyButton', 'assets/easy_button.png');
        this.load.image('hardButton', 'assets/hard_button.png');
        this.load.image('instButton', 'assets/instructions.png');
        this.load.image('BACKGROUND', 'assets/background.png');
        this.load.image('title', 'assets/title.png');
        this.load.image('returnButton', 'assets/return.png');
        
        // -------------------------------------------------
        
        this.load.image('1RSC', 'assets/1_red_solid_circle.png');
        this.load.image('2RSC', 'assets/2_red_solid_circle.png');
        this.load.image('3RSC', 'assets/3_red_solid_circle.png');
        
        this.load.image('1GSC', 'assets/1_green_solid_circle.png');
        this.load.image('2GSC', 'assets/2_green_solid_circle.png');
        this.load.image('3GSC', 'assets/3_green_solid_circle.png');
        
        this.load.image('1BSC', 'assets/1_blue_solid_circle.png');
        this.load.image('2BSC', 'assets/2_blue_solid_circle.png');
        this.load.image('3BSC', 'assets/3_blue_solid_circle.png');
        
        this.load.image('1RSS', 'assets/1_red_solid_square.png');
        this.load.image('2RSS', 'assets/2_red_solid_square.png');
        this.load.image('3RSS', 'assets/3_red_solid_square.png');
        
        this.load.image('1GSS', 'assets/1_green_solid_square.png');
        this.load.image('2GSS', 'assets/2_green_solid_square.png');
        this.load.image('3GSS', 'assets/3_green_solid_square.png');
        
        this.load.image('1BSS', 'assets/1_blue_solid_square.png');
        this.load.image('2BSS', 'assets/2_blue_solid_square.png');
        this.load.image('3BSS', 'assets/3_blue_solid_square.png');
        
        this.load.image('1RSR', 'assets/1_red_solid_cross.png');
        this.load.image('2RSR', 'assets/2_red_solid_cross.png');
        this.load.image('3RSR', 'assets/3_red_solid_cross.png');
        
        this.load.image('1GSR', 'assets/1_green_solid_cross.png');
        this.load.image('2GSR', 'assets/2_green_solid_cross.png');
        this.load.image('3GSR', 'assets/3_green_solid_cross.png');
        
        this.load.image('1BSR', 'assets/1_blue_solid_cross.png');
        this.load.image('2BSR', 'assets/2_blue_solid_cross.png');
        this.load.image('3BSR', 'assets/3_blue_solid_cross.png');
                
        // -------------------------------------------------
                        
        this.load.image('1ROC', 'assets/1_red_open_circle.png');
        this.load.image('2ROC', 'assets/2_red_open_circle.png');
        this.load.image('3ROC', 'assets/3_red_open_circle.png');
        
        this.load.image('1GOC', 'assets/1_green_open_circle.png');
        this.load.image('2GOC', 'assets/2_green_open_circle.png');
        this.load.image('3GOC', 'assets/3_green_open_circle.png');
        
        this.load.image('1BOC', 'assets/1_blue_open_circle.png');
        this.load.image('2BOC', 'assets/2_blue_open_circle.png');
        this.load.image('3BOC', 'assets/3_blue_open_circle.png');             
                
        this.load.image('1ROS', 'assets/1_red_open_square.png');
        this.load.image('2ROS', 'assets/2_red_open_square.png');
        this.load.image('3ROS', 'assets/3_red_open_square.png');
        
        this.load.image('1GOS', 'assets/1_green_open_square.png');
        this.load.image('2GOS', 'assets/2_green_open_square.png');
        this.load.image('3GOS', 'assets/3_green_open_square.png');
        
        this.load.image('1BOS', 'assets/1_blue_open_square.png');
        this.load.image('2BOS', 'assets/2_blue_open_square.png');
        this.load.image('3BOS', 'assets/3_blue_open_square.png');  
        
        this.load.image('1ROR', 'assets/1_red_open_cross.png');
        this.load.image('2ROR', 'assets/2_red_open_cross.png');
        this.load.image('3ROR', 'assets/3_red_open_cross.png');
        
        this.load.image('1GOR', 'assets/1_green_open_cross.png');
        this.load.image('2GOR', 'assets/2_green_open_cross.png');
        this.load.image('3GOR', 'assets/3_green_open_cross.png');
        
        this.load.image('1BOR', 'assets/1_blue_open_cross.png');
        this.load.image('2BOR', 'assets/2_blue_open_cross.png');
        this.load.image('3BOR', 'assets/3_blue_open_cross.png');  
        
        // -------------------------------------------------
        
        this.load.image('1RShC', 'assets/1_red_shaded_circle.png');
        this.load.image('2RShC', 'assets/2_red_shaded_circle.png');
        this.load.image('3RShC', 'assets/3_red_shaded_circle.png');
        
        this.load.image('1GShC', 'assets/1_green_shaded_circle.png');
        this.load.image('2GShC', 'assets/2_green_shaded_circle.png');
        this.load.image('3GShC', 'assets/3_green_shaded_circle.png');
        
        this.load.image('1BShC', 'assets/1_blue_shaded_circle.png');
        this.load.image('2BShC', 'assets/2_blue_shaded_circle.png');
        this.load.image('3BShC', 'assets/3_blue_shaded_circle.png');
        
        this.load.image('1RShS', 'assets/1_red_shaded_square.png');
        this.load.image('2RShS', 'assets/2_red_shaded_square.png');
        this.load.image('3RShS', 'assets/3_red_shaded_square.png');
         
        this.load.image('1GShS', 'assets/1_green_shaded_square.png');
        this.load.image('2GShS', 'assets/2_green_shaded_square.png');
        this.load.image('3GShS', 'assets/3_green_shaded_square.png');
        
        this.load.image('1BShS', 'assets/1_blue_shaded_square.png');
        this.load.image('2BShS', 'assets/2_blue_shaded_square.png');
        this.load.image('3BShS', 'assets/3_blue_shaded_square.png');
        
        this.load.image('1RShR', 'assets/1_red_shaded_cross.png');
        this.load.image('2RShR', 'assets/2_red_shaded_cross.png');
        this.load.image('3RShR', 'assets/3_red_shaded_cross.png');
        
        this.load.image('1GShR', 'assets/1_green_shaded_cross.png');
        this.load.image('2GShR', 'assets/2_green_shaded_cross.png');
        this.load.image('3GShR', 'assets/3_green_shaded_cross.png');
        
        this.load.image('1BShR', 'assets/1_blue_shaded_cross.png');
        this.load.image('2BShR', 'assets/2_blue_shaded_cross.png');
        this.load.image('3BShR', 'assets/3_blue_shaded_cross.png');
        
    },
    create: function() {
        this.state.start('MainMenu');
    }
};
