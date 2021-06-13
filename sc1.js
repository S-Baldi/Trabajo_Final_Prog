class sc1 extends Phaser.Scene{
  constructor(){
    super('escena1');
  }


  preload(){
    this.load.tilemapTiledJSON('mapa', 'assets/Mapa/TileMap.json');
    this.load.image('tiles', 'assets/Mapa/TileSet.png');

    this.load.spritesheet('dude', 'assets/dude.png', {frameWidth:32, frameHeight: 48});

  }

  create(){


    /* Controles personaje */
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

    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
  }

    
    /* Color del fondo */
    game.config.backgroundColor.setTo(108, 210, 222);

    mapa = this.make.tilemap({ key : 'mapa'});
    var tilesets = mapa.addTilesetImage('TileSet', 'tiles');

    solidos = mapa.createDynamicLayer('solidos', tilesets, 0, 0);
    solidos.setCollisionByProperty({ solido: true });

    /* Personaje */
    player = this.physics.add.sprite(100, 100, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);

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

    /* Primero: sacar colisiones del personaje con el mundo 
    this.camera.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels); 
    this.camera.main.starFollow(player); */
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);

    /* Cambiar tamaño de hitbox */
    player.setSize(25, 0); 

    this.physics.add.collider(player, solidos);

  }

  update(){
    if (cursors.left.isDown)
    {
      player.setVelocityX(-200);
      player.anims.play('left', true);
    }

    else if (cursors.right.isDown)
    {
      player.setVelocityX(200);
      player.anims.play('right', true);
    }

    else
    {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    

    if (cursors.up.isDown && player.body.blocked.down)
    {     
      player.setVelocityY(-330);  
    }
  }
}
