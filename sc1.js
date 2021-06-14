class sc1 extends Phaser.Scene{
  constructor(){
    super('escena1');
  }


  preload(){
    

  }

  create(){    

    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
    }
    
    /* Color del fondo */
    /* game.config.backgroundColor.setTo(108, 210, 222); */

    mapa = this.make.tilemap({ key : 'mapa'});
    var tilesets0 = mapa.addTilesetImage('TileSet2', 'plataformas');
    var montaña1 = mapa.addTilesetImage('Fondo1', 'fondomontaña');
    var montaña2 = mapa.addTilesetImage('Fondo2', 'fondomontaña2');
    var cielos1 = mapa.addTilesetImage('Cielo1', 'fondocielo');
    var cielos2 = mapa.addTilesetImage('Cielo2', 'fondocielo2');
    
    /* Colocamos las capas de tiles */
    backcielo1 = mapa.createLayer('cielo1', cielos1, 0, 0);
    backcielo2 = mapa.createLayer('cielo2', cielos2, 0, 0);
    backmontaña2 = mapa.createLayer('fondo2', montaña2, 0, 0);
    backmontaña1 = mapa.createLayer('fondo1', montaña1, 0, 0);
    
    solidos = mapa.createLayer('solidos', tilesets0, 0, 0);
    solidos.setCollisionByProperty({ solido: true });    

    /* Personaje */
    player = this.physics.add.sprite(100, 100, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);
    player.setScale(0.2);

    /* Cambiar tamaño de hitbox */
    player.setSize(300, 300); 

    /* Primero: sacar colisiones del personaje con el mundo */    
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);    

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
