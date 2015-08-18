var GT = GT || {};

GT.game = new Phaser.Game(800,800, Phaser.AUTO, '');

GT.game.state.add('Boot', GT.Boot);
GT.game.state.add('instructions', GT.instructions);
GT.game.state.add('Preload', GT.Preload);
GT.game.state.add('MainMenu', GT.Menu);
GT.game.state.add('Game', GT.Game);

GT.game.state.start('Boot');
