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
    var solidos2 = mapa.addTilesetImage('TileSet2', 'plataformas');

    /* solidos 2 */
    solidos22 = mapa.createLayer('solidos2', solidos2, 0, 0);
    solidos22.setCollisionByProperty({ solidoenemy: true})    
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
    player.setSize(170, 300); 
    /* Primero: sacar colisiones del personaje con el mundo */    
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);

    enemy = this.physics.add.group({
      key: 'robot',
      repeat: 4,
      setXY:{x:180, y:300, stepX:330}
    })
    enemy.children.iterate(function (child){
      child.setBounce(0.7);
      child.setScale(0.25);
      child.setSize(120 , 200);      
    })    
    let timeline = this.tweens.timeline({
      targets: enemy,
      ease: 'Power1',
      duration: 3000,
      loop: -1,
      yoyo:-1,
      tweens:[
        {x:400}
      ]
    })
    /* this.anims.create({
      key: 'caminar',
      frames:this.anims.generateFrameNumbers('robot', {
        start: 0,
        end: 5
      }),
      repeat: -1
    });
    enemy.playAnimation('caminar') */; 


    /* Moneda */    
    /* Animacion moneda */
    moneda = this.physics.add.group({
      key: 'coin',
      repeat: 14,
      setXY: {x: 50, y:Phaser.Math.FloatBetween(50, 400), stepX: Phaser.Math.Between(50, 70)},
    })
    moneda.children.iterate(function (child){
      child.setBounce(1);
      child.setScale(1.5);
      child.setVelocity(Phaser.Math.Between(-50, 50), 5); 
    }) 
    this.anims.create({
      key: 'giro',
      frames:this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 4
      }),
      repeat: -1
    });
    moneda.playAnimation('giro');

    /* Moneda Roja */
    monedaR = this.physics.add.group({
      key: 'coinRed',
      repeat: 2,
      setXY: {x: 100, y:Phaser.Math.FloatBetween(150, 600), stepX: Phaser.Math.Between(300, 700)},
    })
    monedaR.children.iterate(function(child){
      child.setBounce(1);
      child.setScale(1.5);
      child.setVelocity(200, 200);
    })
    this.anims.create({
      key: 'giroRed',
      frames:this.anims.generateFrameNumbers('coinRed',{
        start: 0,
        end: 4
      }),
      repeat: -1
    })
    monedaR.playAnimation('giroRed');

    /* Perro */
    dogi = this.physics.add.group()
    this.anims.create({
      key: 'dogCorre',
      frames:this.anims.generateFrameNumbers('dogito',{
        start: 0,
        end: 5
      }),
      repeat: -1,
      frameRate: 7
    }) 

    /* PowerupAzul */
  /*this.anims.create({
      key: 'giroblue',
      frames:this.anims.generateFrameNumbers('poderAzul.', {
        start: 0,
        end: 5
      }),
      repeat: -1
    });    
    powerAzul.anims.play('giroblue'); */

    /* Colliders */
    this.physics.add.collider(player, solidos);
    player_collider = this.physics.add.collider(player, enemy, this.hitPlayer, null, this);
    this.physics.add.collider(moneda, solidos);
    this.physics.add.collider(monedaR, solidos);
    this.physics.add.collider(enemy, solidos);
    this.physics.add.collider(enemy, solidos22);
    this.physics.add.collider(dogi, solidos);
    
    /* Overlaps */
    this.physics.add.overlap(player, moneda, this.juntarMonedas);
    this.physics.add.overlap(player, monedaR, this.juntarMonedasRed, null, this);
    this.physics.add.overlap(player, dogi, this.juntarPerro, null, this);
    
    /* Variables */
    scoreNivel1 = 0;
    scoreText1 = this.add.text(550, 0, 'Puntaje: ' +scoreNivel1, 
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});    
    scoreText1.scrollFactorX = 0;
    scoreText1.scrollFactorY = 0;
    
    vidas = 3;
    textVidas = this.add.text(200, 0, 'Vidas: ' + vidas,
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textVidas.scrollFactorX = 0;
    textVidas.scrollFactorY = 0;
    
    initialTime = 60;
    timeText = this.add.text(950, 0, 'Tiempo: ' + initialTime, 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    timeText.scrollFactorX = 0;
    timeText.scrollFactorY = 0;
    
    velocidadJugador = 200;
    timedEvent = this.time.addEvent(
      {delay: 1000, callback: this.onSecond, callbackScope: this, loop: true});

    gameOver = false;
    gameWin = false;
    
    sonidoCoin = this.sound.add('coinDorada');

    musicaNivel1 = this.sound.add('musicaLevel1');
    musicaNivel1.play({volume: 0.2, loop: true});

    sonidoPower = this.sound.add('pauer');

    spawn = Phaser.Math.FloatBetween(1, 3);
    spawnTime = 0;
  }

  update(time, delta){
    if (teclaR.isDown)
    {
      this.scene.restart();      
      musicaNivel1.stop();
    }

    if (teclaP.isDown)
    {
      this.scene.start('menu');      
      musicaNivel1.stop();
    }

    if (cursors.left.isDown)
    {
      player.setVelocityX(-velocidadJugador);
      player.anims.play('left', true);
      /* weapon.fireAngle = Phaser.ANGLE_LEFT; */
    }
    else if (cursors.right.isDown)
    {
      player.setVelocityX(velocidadJugador);
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

    if (enemy.x > 0){
      enemy.setVelocityX(-200)
    }
    

    if (gameOver){
      return;
    }

    if(scoreNivel1>1000){
      this.gameWin()
    }

    if(!player_collider.active)
    {
      tempo+=delta
      if(tempo>=2000) 
      {
        player_collider.active=true
        tempo=0
      }
    }

    if (initialTime <= 0){
      this.gameOver();
    }

    if (vidas <= 0){
      this.gameOver();       
    }

    if (spawn=1 )
    {
      spawnTime += delta;
      if(spawnTime >= 30000)
      {
        spawnTime = 0
        this.spawnPowerUpAzul()
      }
    }

    if (spawn=2)
    {       
      spawnTime += delta;
      if(spawnTime >= 30000)
      {
        spawnTime = 0
        this.spawnPowerUpRed()
      }
    }

    if (spawn=3)
    {
      spawnTime += delta;
      if(spawnTime >= 30000)
      {
        spawnTime = 0
        this.spawnPowerUpYellow()
      }
    }
  }
  /* POWERUPS */
                    /* PODER AZUL */
  spawnPowerUpAzul(){    
    powerAzul = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderAzul');
    this.physics.add.collider(powerAzul, solidos);
    this.physics.add.overlap(player, powerAzul, this.PowerUpAzul, null, this);
    powerAzul.setScale(0.12);
  }  
  PowerUpAzul(player, powerAzul){    
    powerAzul.disableBody(true, true);
    player.setVelocityX(velocidadJugador = velocidadJugador + 100);
    sonidoPower.play();
  }
                    /* PODER ROJO */
  spawnPowerUpRed(){    
    powerRed = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderRed');
    this.physics.add.overlap(player, powerRed, this.PowerUpRed, null, this);
    this.physics.add.collider(powerRed, solidos);    
    powerRed.setScale(0.12);
  }
  PowerUpRed(player, powerRed){
    powerRed.disableBody(true, true);
    vidas += 1;
    textVidas.setText('Vidas: '+ vidas)
    sonidoPower.play();
  }
                   /* PODER AMARILLO */
  spawnPowerUpYellow(){    
    powerYellow = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderYellow');
    this.physics.add.collider(powerYellow, solidos);    
    this.physics.add.overlap(player, powerYellow, this.PowerUpYellow, null, this);
    powerYellow.setScale(0.12);
  }
  PowerUpYellow(player, powerYellow){
    powerYellow.disableBody(true, true);    
    initialTime = initialTime +10;
    timeText.setText('Tiempo: ' + initialTime)
    sonidoPower.play();
  }

  /* HITS */
  hitPlayer(player, enemy)
  {
    vidas -= 1;
    textVidas.setText('Vidas: '+ vidas)
    player_collider.active = false;
  }
  /* TEMPORIZADOR */
  onSecond() 
  {
    if (! gameOver)
    {
      //descuento de segundos
      initialTime = initialTime -1; // One second
      timeText.setText('Tiempo: '+ initialTime);
      if (initialTime == 0) 
      {
        timedEvent.paused = true;
        this.gameOver()
      }
    }
  }

  /* MONEDAS */
  juntarMonedas (player, moned){
    moned.disableBody(true, true);
    scoreNivel1 += 10;
    scoreText1.setText('Puntaje: ' + scoreNivel1);

    /* Sonido */
    sonidoCoin.play({volume:0.4});

    if (moneda.countActive(true) === 0)
    {
      //  Nuevas monedas
      moneda.children.iterate(function (child) {
        child.enableBody(true, Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), true, true);
      });
    }
  }

  juntarMonedasRed (player, monedaRr){
    monedaRr.disableBody(true, true);
    scoreNivel1 += 30;
    scoreText1.setText('Puntaje: ' + scoreNivel1);

    /* Sonido */    
    sonidoCoin.play({volume:0.4});

    if (monedaR.countActive(true) === 0){
      /* Nuevas monedas rojas */
      monedaR.children.iterate(function(child){
        child.enableBody(true, Phaser.Math.Between(100, 1200), Phaser.Math.Between(100, 500), true, true);        
      });
      
      /* Respawn perros */
      var x = (player.x < 600) ? Phaser.Math.Between(600, 1000) : Phaser.Math.Between(0, 600);

      var dogis = dogi.create(x, 300, 'dogito');
      dogis.setBounce(1);
      dogis.setScale(0.2);
      dogis.setVelocity(Phaser.Math.Between(-100, 100), 20);
      dogis.allowGravity = false;
      dogi.playAnimation('dogCorre'); 
      
    }
  }

  juntarPerro (player, dogi){
    dogi.disableBody(true, true);
    scoreNivel1 += 100;
    scoreText1.setText('Puntaje: ' + scoreNivel1)

    /* Sonido */    
    sonidoCoin.play({volume:0.4});
  }  

  gameOver(){
    gameOver = true;
    this.physics.pause();  
    
    musicaNivel1.stop();

    textGameOver = this.add.text(400, 300, 'Has Perdido', 
    { fontFamily: 'Arial', fontSize: 110, color: '#ff0000'})
    .setInteractive()
    .on('pointerdown', () => this.scene.start('gameover'));
    textGameOver.scrollFactorX = 0;
    textGameOver.scrollFactorY = 0;
  }

  gameWin(){
    gameWin = true;
    musicaNivel1.stop();
    this.physics.pause();
    this.scene.start('gamewin');
  }
}
