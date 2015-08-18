var GT = GT || {};
var difficulty = 1; // 0 for easy 1 for hard
var esayBuetton;

GT.Menu = function() {};
GT.instructions = function() {};

GT.Menu.prototype = {
    
    preload: function() {
        background = this.game.add.tileSprite(0,0,800,800, 'BACKGROUND');
       
    },
    
    create: function() {
        this.mainMenu();
    },
    mainMenu: function() {
        this.game.add.sprite(0,50, 'title');
        instButton = this.game.add.button(244,250, 'instButton', this.inst);
        easyButton = this.game.add.button(244,400,'easyButton', this.setEasyMode);
        hardButton = this.game.add.button(244,550, 'hardButton', this.setHardMode); 
        
    },    
    inst: function() {
        this.game.state.start('instructions');
    },
    setEasyMode: function() {
        difficulty = 0;
        this.game.state.start('Game');
    },
    setHardMode: function() {
        difficulty = 1;
        this.game.state.start('Game');
    },
    
    start: function() {
        this.game.state.start('Game');
    }
};

GT.instructions.prototype = {
    preload: function() {
        background = this.game.add.tileSprite(0,0,800,800, 'BACKGROUND');
    },
    create: function() {
    
    this.game.add.text(0,50, 'Welcome to Group Theory! You are presented with a 4 x 3 grid of cards.\nEach card has several properties. A shape, a number of shapes, a color, and a filling.\n', {font:'18px Arial', fill: '#000000', weight: 'bold'});
        this.game.add.text(0,100, 'The object of the game is match 3 cards together in a group.\nA group is 3 cards in which each property is the SAME or DIFFERENT across all three cards.\nTo play, select 3 cards and hit the GROUP! button.\nSee the below for examples.\n', {font:'18px Arial', weight: 'bold', fill: '#000000'});
    
        var frame1 = this.game.add.sprite(32,194, '1RSC');
        var frame2 = this.game.add.sprite(128,194, '2RSC');
        var frame3 = this.game.add.sprite(224,194, '3RSC');
        
        var frame4 = this.game.add.sprite(32, 330, '1GShC');
        var frame5 = this.game.add.sprite(128, 330, '2RSC');
        var frame6 = this.game.add.sprite(224, 330, '3BOC');
        
        var frame7 = this.game.add.sprite(32, 466, '3ROC');
        var frame8 = this.game.add.sprite(128, 466, '3RShC');
        var frame9 = this.game.add.sprite(224, 466, '2BOC');
        
        frame1.scale.setTo(2,2);
        frame2.scale.setTo(2,2);
        frame3.scale.setTo(2,2);
        frame4.scale.setTo(2,2);
        frame5.scale.setTo(2,2);
        frame6.scale.setTo(2,2);
        frame7.scale.setTo(2,2);
        frame8.scale.setTo(2,2);
        frame9.scale.setTo(2,2);
        
        this.game.add.text(0,288, 'This is a group. All three numbers are different, all three colors, shapes, and fillings are the same.', {font: '18px Arial', fill:'#000000', weight: 'bold'});
        this.game.add.text(0,424, 'This is a group. All three numbers, colors, and filling are different; all three shapes are the same\n.', {font: '18px Arial', fill:'#000000', weight: 'bold'});
        this.game.add.text(0,560, 'This is not a group. Two of the cards have three red circles, and one has two blue circles.\nTwo cards are open and one is shaded.\n', {font: '18px Arial', fill:'#000000', weight: 'bold'});  
    
        this.game.add.text(0,640, 'If there are no groups, press the DEAL button. This will deal 3 more cards. You can only do this\ntwice before reshuffling the deck.\n', {font: '18px Arial', fill: '#000000', weight: 'bold'});                
        
        this.game.add.text(0,720, 'Click to return to the Main Menu', {font: '18px Arial', fill: '#000000', weight: 'bold'});
    },
    update: function() {
        this.game.input.onTap.addOnce(this.returnToMenu, this);   
    },
    
    returnToMenu: function() {
        this.game.state.start('MainMenu');
    }
}
