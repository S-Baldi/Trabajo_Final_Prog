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
    player = this.physics.add.sprite(50, 800, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);
    player.setScale(0.2);
    /* Cambiar tamaño de hitbox */
    player.setSize(200, 300); 
    /* Primero: sacar colisiones del personaje con el mundo */    
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);


    /* Moneda */    
    /* Animacion moneda */
    moneda = this.physics.add.group({
      key: 'coin',
      repeat: 20,
      setXY: {x: 50, y:Phaser.Math.FloatBetween(50, 800), stepX: Phaser.Math.Between(50, 70)},
      
    })
    moneda.children.iterate(function (child){
      child.setBounce(1);
      child.setScale(1.5);
    }) 
    /* this.anims.create({
      key: 'giro',
      frames:this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 4
      }),
      repeat: -1
    });
    moneda.anims.play('giro'); */  


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

    /* Robot */
    enemy = this.physics.add.sprite(149, 300, 'robot');
    enemy2 = this.physics.add.sprite(555, 500, 'robot');
    enemy3 = this.physics.add.sprite(55, 900, 'robot');
    enemy4 = this.physics.add.sprite(1235, 400, 'robot');
    enemy5 = this.physics.add.sprite(1300, 600, 'robot');
    enemy6 = this.physics.add.sprite(850, 600, 'robot');

    enemy.setBounce(0.2);
    enemy.setScale(0.25);
    enemy.setSize(140 , 230);
    enemy.enableBody = true;

    enemy2.setBounce(0.2);
    enemy2.setScale(0.25);
    enemy2.setSize(140 , 230);
    enemy2.enableBody = true;

    enemy3.setBounce(0.2);
    enemy3.setScale(0.25);
    enemy3.setSize(140 , 230);
    enemy3.enableBody = true;

    enemy4.setBounce(0.2);
    enemy4.setScale(0.25);
    enemy4.setSize(140 , 230);
    enemy4.enableBody = true;

    enemy5.setBounce(0.2);
    enemy5.setScale(0.25);
    enemy5.setSize(140 , 230);
    enemy5.enableBody = true;

    enemy6.setBounce(0.2);
    enemy6.setScale(0.25);
    enemy6.setSize(140 , 230);
    enemy6.enableBody = true;
  //Movimiento del enemigo
    //enemy
    if(enemy.x<155)
    {
      enemy.setVelocityX(+100)
      //anims.play("derecha", true);
    }
    if(enemy.x>295)
    {
      enemy.setVelocityX(-100)
      // anims.play("izquierda", true);
    }

    //enemy2
    if(enemy2.x<560)
    {
      enemy2.setVelocityX(+100)
      // anims.play("derecha", true);
    }
    if(enemy2.x>740)
    {
      enemy2.setVelocityX(-100)
      // anims.play("izquierda", true);
    }

    //enemy3
    if(enemy3.x<60)
    {
      enemy3.setVelocityX(+200)
      // anims.play("derecha", true);
    }
    if(enemy3.x>1500)
    {
      enemy3.setVelocityX(-200)
      // anims.play("izquierda", true);
    }

    //enemy4
    if(enemy4.x<1240)
    {
      enemy4.setVelocityX(+100)
      //anims.play("derecha", true);
    }
    if(enemy4.x>1360)
    {
      enemy4.setVelocityX(-100)
      // anims.play("izquierda", true);
    }

    //enemy5
    if(enemy5.x<1160)
    {
      enemy5.setVelocityX(+100)
      // anims.play("derecha", true);
    }
    if(enemy5.x>1290)
    {
      enemy5.setVelocityX(-100)
      // anims.play("izquierda", true);
    }

    //enemy6
    if(enemy6.x<690)
    {
      enemy6.setVelocityX(+100)
      // anims.play("derecha", true);
    }
    if(enemy6.x>849)
    {
      enemy6.setVelocityX(-100)
      // anims.play("izquierda", true);
    }

    /* Colliders */
    this.physics.add.collider(player, solidos);
    this.physics.add.collider(moneda, solidos);
    this.physics.add.collider(moneda, player);
    this.physics.add.collider(enemy, solidos);
    this.physics.add.collider(enemy, player);
    this.physics.add.collider(enemy2, player);
    this.physics.add.collider(enemy2, solidos);
    this.physics.add.collider(enemy2, player);
    this.physics.add.collider(enemy3, solidos);
    this.physics.add.collider(enemy3, player);
    this.physics.add.collider(enemy4, solidos);
    this.physics.add.collider(enemy4, player);
    this.physics.add.collider(enemy5, solidos);
    this.physics.add.collider(enemy5, player);
    this.physics.add.collider(enemy6, solidos);
    this.physics.add.collider(enemy6, player);

    /* BALA */
    /*  weapon = game.add.weapon(10, 'bala');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 50;
    weapon.trackSprite(player, 0, 0, false);

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR); */

      /* TEMPORIZADOR */
    /* initialTime = 30
    //timedEvent = this.time.delayedCall(1000, this.onSecond, [], this, true);
    timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
    timeText = this.add.text(600, 900, '', { fontSize: '32px', fill: '#000' }); */
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


        /*   TEMPORIZADOR
        onSecond() {
        if (! gameOver)
        {       
            initialTime = initialTime - 1; // One second
            timeText.setText('Countdown: ' + initialTime);
            if (initialTime == 0) {
                timedEvent.paused = true;
                this.gameOver()
            }            
        }
        } */
}
