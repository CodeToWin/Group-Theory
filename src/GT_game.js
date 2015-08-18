var GT = GT || {};

var score = 0;      // player score, +1 for each group
var deck = [];      // array of strings of the image file names
var cardsPlayed = []; // array of cards that hve been played
var cardsInPlay = []; // array of cards that are currently in play
var card;
var cardString = '';
var numSelected = 0;    // number of currently selected cards
var cardsSelected = []; // array of selected cards - should have max length of 3
var gameWorld;
var groupButton;
var backGround;
var groupButtonPressed = false;
var dealButtonPressed = false;
var messageText;
var scoreText;
var timer = 0;
var maxNumberCards = 27;
var coordArray = [];
var newCards;
var scoreString = 'Groups: ';
var scoreSprite;
var isGroup = false;
var warnOnce = false;
var shakeWorld = 0;

GT.Game = function() {};

GT.Game.prototype = {
    preload: function() {       
        background = this.game.add.tileSprite(0,0,800,800, 'BACKGROUND');
        groupButton = this.game.add.button(200, 690, 'GROUP', this.actionOnClick);
        dealButton = this.game.add.button(-20,685, 'DEAL', this.dealMoreCards);
        returnButton = this.game.add.button(0,0,'returnButton', this.returnToMenu);
        scoreTicker = this.game.add.sprite(this.game.width - 325, 687, 'SCORE');
        scoreSprite = this.game.add.sprite(725, 740, 'Score1');        
        scoreSprite.enableBody = true;
        scoreSprite.visible = false;
        scoreText = this.game.add.text(this.game.width-64, 710, score, {font: '72px Arial', fill: '#fff'});
        messageText = this.game.add.text(272,670, '', {font: '24px Arial', fill: '#000000'});
        messageText.visible = false;

    },
    returnToMenu: function() {
        this.game.state.start('MainMenu');
    },
    
    create: function() {        
        this.initializeGame();
        this.createGameWorld();
    },
    
    initializeGame: function() {
        if (gameWorld) { 
            gameWorld.destroy();            
        }        
        if (newCards) {
            newCards.destroy();
        }
        if (card) {
            card.destroy();
        }
        deck.length = 0;
        cardsInPlay.length = 0;
        cardsSelected.length = 0;
        cardsPlayed.length = 0;
        coordArray.length = 0;        
        score = 0;
        scoreText.text = score;
        warnOnce = false;
        dealButtonPressed = false;
    },    
    
    createGameWorld: function() {        
        var n = 0;
        gameWorld = this.game.add.group(); 
        newCards = this.game.add.group();
        this.createDeck(); 
        this.deal(12, true, false); 
        for (var k = 0; k < 4; k++) {
            for (var i = 0; i < 3; i++) {    
                card = gameWorld.create(275 + 128*i, 110*k, cardsInPlay[n].stringRep);
                card.inputEnabled = true;
                card.input.start(0, true);
                card.events.onInputDown.add(this.select, this);
                gameWorld.getAt(i).alpha = 1;
                card.scale.x = 3;
                card.scale.y = 3;
                n++;
            }
        }    
    },
     
    update: function() {
       
        if (numSelected == 3 && groupButtonPressed == true) {
            this.checkForGroup();    
        } else if (groupButtonPressed == true) {
            messageText.text = 'You must select exactly 3 cards at a time!';
            messageText.visible = true;
            timer = this.game.time.now + 1500;
            groupButtonPressed = false;
            this.resetCards();
        }
        if (dealButtonPressed == true) {
            this.deal(3,true,true);
        }
        if (this.game.time.now > timer) { 
            messageText.visible = false;
        }
        if (isGroup) {
            scoreSprite.visible = true;
            scoreSprite.y -= 15;
            if (scoreSprite.y < 0) {
                scoreSprite.y = 740;
                scoreSprite.visible = false;
                isGroup = false;
            }
        }            
    },
    
    resetCards: function() {
        for (i = 0; i < gameWorld.length; i++) {
            gameWorld.getAt(i).alpha = 1;
        }
        cardsSelected = [];
        numSelected = 0;
    },
    
    checkForGroup: function() {
        var ColorsMatch = false;
        var NumbersMatch = false;
        var FillingsMatch = false;
        var ShapesMatch = false;
        isGroup = false;
  
        if (cardsSelected[0] !== cardsSelected[1] && cardsSelected[0] !== cardsSelected[2] && cardsSelected[1] !== cardsSelected[2]) {
            if (cardsSelected[0].number === cardsSelected[1].number &&
                cardsSelected[0].number === cardsSelected[2].number &&
                cardsSelected[1].number === cardsSelected[2].number) {
                    NumbersMatch = true; 
            }

            if (cardsSelected[0].color === cardsSelected[1].color &&
                cardsSelected[0].color === cardsSelected[2].color &&
                cardsSelected[1].color === cardsSelected[2].color) {
                    ColorsMatch = true; 
            }

            if (cardsSelected[0].filling === cardsSelected[1].filling &&
                cardsSelected[0].filling === cardsSelected[2].filling &&
                cardsSelected[1].filling === cardsSelected[2].filling) {
                    FillingsMatch = true;  
            }

            if (cardsSelected[0].shape === cardsSelected[1].shape &&
                cardsSelected[0].shape === cardsSelected[2].shape &&
                cardsSelected[1].shape === cardsSelected[2].shape) {
                    ShapesMatch = true;  
            }

            if (cardsSelected[0].number !== cardsSelected[1].number &&
                cardsSelected[0].number !== cardsSelected[2].number &&
                cardsSelected[1].number !== cardsSelected[2].number) {
                    NumbersMatch = true;
            }

            if (cardsSelected[0].color !== cardsSelected[1].color &&
                cardsSelected[0].color !== cardsSelected[2].color &&
                cardsSelected[1].color !== cardsSelected[2].color) {
                    ColorsMatch = true;
            }

            if (cardsSelected[0].filling !== cardsSelected[1].filling &&
                cardsSelected[0].filling !== cardsSelected[2].filling &&
                cardsSelected[1].filling !== cardsSelected[2].filling) {
                    FillingsMatch = true;
            }

            if (cardsSelected[0].shape !== cardsSelected[1].shape &&
                cardsSelected[0].shape !== cardsSelected[2].shape &&
                cardsSelected[1].shape !== cardsSelected[2].shape) {
                    ShapesMatch = true;   
            }
            
            if (ColorsMatch && NumbersMatch && FillingsMatch && ShapesMatch) {
                scoreText.text = ++score;  
                isGroup = true;
               
                this.deal(3, false, false); 
            
            } else {
                messageText.text = "Sorry, these cards do not form a group!";
                messageText.visible = true;
                timer = this.game.time.now + 1500;
            }

        coordArray.length = 0;
        this.resetCards();
        groupButtonPressed = false;
        }
    },
    
    createDeck: function() {
        var col, fill, shap = 'C';
        for (var n = 1; n <= 3; n++) { // iterate over number - 1,2,3
            for (var c = 0; c < 3; c++) { // iterate over color
                if (c == 0) {
                    col = 'R';
                } 
                if (c == 1) {
                    col = 'G';
                }
                if (c == 2) {
                    col = 'B';
                }
                for (var f = 0; f < 3; f++) { // iterate over filling
                    if (f == 0) {
                        fill = 'S';
                    }
                    if (f == 1) {
                        fill = 'O';
                    }
                    if (f == 2) {
                        fill = 'Sh';
                    }
                    if (difficulty == 1) {
                        for (var sh = 0; sh < 3; sh++) {
                            if (sh == 0) {
                                shap = 'C';
                            }
                            if (sh == 1) {
                                shap = 'S';
                            }
                            if (sh == 2) {
                                shap = 'R'
                            }
                        cardString = n.toString() + col + fill + shap;
                        deck.push({number: n, color: c, filling: fill, shape: shap, stringRep: cardString});
                        }
                    } else {
                        cardString = n.toString() + col + fill + 'C';
                        deck.push({number: n, color: c, filling: fill, shape: 'C', stringRep: cardString});
                    }
                    
                }       
            }
        }       
    },
    
    deal: function(numCards, firstDeal, needMoreCards) {
        var i = 0;
        var deckSize = 0;
        if (difficulty == 0) { deckSize = 26; }
        if (difficulty == 1) { deckSize = 80; }
        
        if (numCards + cardsPlayed.length > deck.length || (needMoreCards && warnOnce)) {
            messageText.text = 'We have run out of cards! Reshuffling!';
            messageText.visible = true;
            timer = this.game.time.now + 1500;
            this.initializeGame();
            this.createGameWorld();
        } else {
            while (i < numCards) {
                var q = this.game.rnd.integerInRange(0, deckSize);            
                if (cardsPlayed.indexOf(q) == -1) {       
                    cardsPlayed.push(q);
                    cardsInPlay.push({number: deck[q].number, color: deck[q].number, shape: deck[q].shape, filling: deck[q].filling, stringRep: deck[q].stringRep });              
                    i++;
                }
            }
            if (firstDeal == false) {
                for (k = 0; k < cardsSelected.length; k++) {
                    for (i = 0; i < gameWorld.length; i++) {                    
                        if (cardsSelected[k].stringRep == gameWorld.children[i].key) {
                            coordArray.push({ x: gameWorld.children[i].x, y: gameWorld.children[i].y, z: i/*z: gameWorld.children[i].z*/});
                        }
                    } 
                }
                for (var cntr = cardsInPlay.length-3, i = 0; cntr < cardsInPlay.length; cntr++, i++) {     
                    card = newCards.create(coordArray[i].x, coordArray[i].y, cardsInPlay[cntr].stringRep);
                    card.scale.x = 3;
                    card.scale.y = 3;
                    card.inputEnabled = true;
                    card.input.start(0, true);
                    card.events.onInputDown.add(this.select, this);
                    gameWorld.replace(gameWorld.getAt(coordArray[i].z), card);
                }                                
            }            
            if (needMoreCards == true) {
                var max = gameWorld.length;
                if (max == 15) {
                    messageText.text = 'Warning, pressing deal again reshuffles';
                    timer = this.game.time.now + 1500;
                    messageText.visible = true;
                    warnOnce = true;
                }
                if (max < 18) {
                    for (var i = max; i < 3+max; i++) { 
                        card = gameWorld.create(275 + 128*(i-max), (max / 3 )*110, cardsInPlay[i].stringRep);
                        card.inputEnabled = true;
                        card.input.start(0, true);
                        card.events.onInputDown.add(this.select, this);
                        gameWorld.getAt(i).alpha = 1;
                        card.scale.x = 3;
                        card.scale.y = 3;            
                    }                    
                }
                dealButtonPressed = false;
            }
        }
    },
    
    select: function (card, pointer) {
        if (card.alpha < 1) { 
            card.alpha = 1; 
            cardsSelected.pop();
            numSelected--;
        }
        else {
            if (card.key.length == 4) {
                cardsSelected.push({number: card.key[0], color: card.key[1], 
                                    filling: card.key[2], shape: card.key[3], stringRep: card.key});
            } else if (card.key.length == 5) {
                cardsSelected.push({number: card.key[0], color: card.key[1], 
                                    filling: card.key[2] + card.key[3], shape: card.key[4], stringRep: card.key});
            }
            card.alpha = 0.25;
            numSelected++;
        }
    },
  
    actionOnClick: function() {
        groupButtonPressed = true;
    },
    
    dealMoreCards: function() {
        dealButtonPressed = true;
    }
 };