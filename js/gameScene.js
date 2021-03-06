 class GameScene extends Phaser.Scene {

	constructor() {
		super({key : 'gameScene'});
	}

	init() {
		
	};

};
var player;
var coin;
var platforms;
var cursors;
var score = 0;
var scoreText;
        
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'images/sky4.jpg');
    this.load.image('ground', 'images/platform.jpg');
    this.load.image('coin', 'images/coin2.jpg');
    this.load.image('enemy', 'images/enemy.png');
    this.load.spritesheet('dude', 'images/dude.png',
        { frameWidth: 32, frameHeight: 48 } );
}
        
function create ()
{
    this.add.image(400, 300, 'sky');
    
    platforms = this.physics.add.staticGroup();
    
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(150, 400, 'ground');
    platforms.create(600, 400, 'ground');
    platforms.create(100, 250, 'ground');
    platforms.create(750, 220, 'ground');
    
    player = this.physics.add.sprite(445, 470, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
       key: 'left',
       frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
       frameRate: 10,
       repeat: -1
});

    this.anims.create({
       key: 'turn',
       frames: [ { key: 'dude', frame: 4 } ],
       frameRate: 20
});

   this.anims.create({
       key: 'right',
       frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
       frameRate: 10,
       repeat: -1
});
    cursors = this.input.keyboard.createCursorKeys();
    
    coin = this.physics.add.group({
        key: 'coin',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    coin.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(coin, platforms);

    this.physics.add.overlap(player, coin, collectCoin, null, this);
}
function update ()
{
if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

function collectCoin (player, coin)
{
    coin.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);
}
end() {
		
	}

}

export default GameScene;
