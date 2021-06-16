class sc1 extends Phaser.Scene{
  constructor(){
    super('escena1');
  }


  preload(){
    

  }

  create(){    

    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
      teclaR = this.input.keyboard.addKey('R');
      teclaP = this.input.keyboard.addKey('P');
    }
    
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
    /* Propiedad de colision al tile */
    solidos = mapa.createLayer('solidos', tilesets0, 0, 0);
    solidos.setCollisionByProperty({ solido: true });    

    /* Personaje */
    player = this.physics.add.sprite(100, 400, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);
    player.setScale(0.2);
    /* Cambiar tamaño de hitbox */
    player.setSize(200, 300); 
    /* Primero: sacar colisiones del personaje con el mundo */    
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);

    this.physics.add.collider(player, solidos);

    /* Moneda */
    moneda = this.physics.add.sprite (150, 900, 'coin');
    this.physics.add.collider(moneda, solidos);
    moneda.setBounce(1);
    moneda.setScale(1.5);
    /* Animacion moneda */
    this.anims.create({
      key: 'giro',
      frames:this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 4
      }),
      repeat: -1
    });
    moneda.anims.play('giro');


    /* Powerups */
    power1 = this.physics.add.sprite (200, 900, 'poder1');
    power1.setScale(0.1);
    this.physics.add.collider(power1, solidos);
    power1.setBounce(1);

    power2 = this.physics.add.sprite (250, 900, 'poder2');
    power2.setScale(0.1);
    this.physics.add.collider(power2, solidos);
    power2.setBounce(1);

    power3 = this.physics.add.sprite (300, 900, 'poder3');
    power3.setScale(0.1);    
    this.physics.add.collider(power3, solidos);
    power3.setBounce(1);

    power4 = this.physics.add.sprite (350, 900, 'poder4');
    power4.setScale(0.1);
    this.physics.add.collider(power4, solidos);
    power4.setBounce(1);

    /* BALA */
    /*  weapon = game.add.weapon(10, 'bala');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 50;
    weapon.trackSprite(player, 0, 0, false);

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR); */
  }

  update(){
    if (teclaR.isDown)
    {
      this.scene.restart();
    }

    if (cursors.left.isDown)
    {
      player.setVelocityX(-200);
      player.anims.play('left', true);
      /* weapon.fireAngle = Phaser.ANGLE_LEFT; */
    }

    else if (cursors.right.isDown)
    {
      player.setVelocityX(200);
      player.anims.play('right', true);
      /* weapon.fireAngle = Phaser.ANGLE_RIGHT; */
    }

    else
    {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    

    if (cursors.up.isDown && player.body.blocked.down)
    {     
      player.setVelocityY(-330);
      /* weapon.fireAngle = Phaser.ANGLE_UP; */
    }

    /* if (fireButton.isDown) {
      weapon.fire();
    } */
  }

}
