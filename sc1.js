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
    player.setSize(200, 300); 
    /* Primero: sacar colisiones del personaje con el mundo */    
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);

    enemy = this.physics.add.group({
      key: 'robot',
      repeat: 4,
      setXY:{x:180, y:300, stepX:330}
    })
    enemy.children.iterate(function (child){
      child.setBounce(0.2);
      child.setScale(0.25);
      child.setSize(140 , 230);      
    })    
    let timeline = this.tweens.timeline({
      targets: enemy,
      ease: 'Circ',
      duration: 2000,
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
      repeat: 20,
      setXY: {x: 50, y:Phaser.Math.FloatBetween(50, 800), stepX: Phaser.Math.Between(50, 70)},
    })
    moneda.children.iterate(function (child){
      child.setBounce(1);
      child.setScale(1.5);
      /* child.setVelocity(Phaser.Math.Between(-100, 100), 20); */
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
      setXY: {x: 50, y:Phaser.Math.FloatBetween(50, 800), stepX: Phaser.Math.Between(300, 700)},
    })
    monedaR.children.iterate(function(child){
      child.setBounce(1);
      child.setScale(1.5);
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
    dogi = this.physics.add.group({
      key: 'dogito',
      repeat: 1,
      setXY: {x: 400, y:300, stepX: Phaser.Math.Between(300, 700)},
    })
    dogi.children.iterate(function(child){
      child.setBounce(1);
      child.setScale(0.2);
      child.setVelocity(Phaser.Math.Between(-100, 100), 20);
    })
    this.anims.create({
      key: 'dogCorre',
      frames:this.anims.generateFrameNumbers('dogito',{
        start: 0,
        end: 5
      }),
      repeat: -1,
      frameRate: 7
    })
    dogi.playAnimation('dogCorre');

    /* Powerups */
    power1 = this.physics.add.sprite (200, 900, 'poder1');
    power1.setScale(0.1);
    this.physics.add.collider(power1, solidos);
    power1.setBounce(1);

    /* PowerupAzul */
    powerAzul = this.physics.add.sprite (400, 900, 'poderAzul');
    this.physics.add.collider(powerAzul, solidos);
    powerAzul.setScale(0.1);

    /*  this.anims.create({
      key: 'giroblue',
      frames:this.anims.generateFrameNumbers('poderAzul.', {
        start: 0,
        end: 5
      }),
      repeat: -1
    });    
    powerAzul.anims.play('giroblue', true); */

    /* Power2 */    
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
    
    /* Colliders */
    this.physics.add.collider(player, solidos);
    this.physics.add.collider(player, enemy, this.hitPlayer, null, this);
    this.physics.add.collider(moneda, solidos);
    this.physics.add.collider(monedaR, solidos);
    this.physics.add.collider(enemy, solidos);
    this.physics.add.collider(enemy, solidos22);
    this.physics.add.collider(dogi, solidos);
    
    /* Overlaps */
    this.physics.add.overlap(player, moneda, this.juntarMonedas);
    this.physics.add.overlap(player, monedaR, this.juntarMonedasRed, null, this);
    this.physics.add.overlap(player, dogi, this.juntarPerro, null, this);

    /* BALA */
    /*  weapon = game.add.weapon(10, 'bala');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 50;
    weapon.trackSprite(player, 0, 0, false);

    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR); */

    scoreText1 = this.add.text(550, 0, 'Puntaje: 0', 
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});    
    scoreText1.scrollFactorX = 0;
    scoreText1.scrollFactorY = 0;
    
    textVidas = this.add.text(200, 0, 'Vidas: 3',
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textVidas.scrollFactorX = 0;
    textVidas.scrollFactorY = 0;

    timeText = this.add.text(950, 0, 'Tiempo: 90', 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    timeText.scrollFactorX = 0;
    timeText.scrollFactorY = 0;    

    initialTime = 5;
    timedEvent = this.time.addEvent(
      {delay: 1000, callback: this.onSecond, callbackScope: this, loop: true});

    gameOver = false;
  }

  update(){
    if (teclaR.isDown)
    {
      this.scene.restart();
      scoreNivel1 = 0;
      vidas = 3;
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

    if (enemy.x > 0){
      enemy.setVelocityX(+100)
    }

    if (gameOver){
      return;
    }
  }

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

  juntarMonedas (player, moneda){
    moneda.disableBody(true, true);
    scoreNivel1 += 10;
    scoreText1.setText('Puntaje: ' + scoreNivel1);
  }
  juntarMonedasRed (player, monedaR){
    monedaR.disableBody(true, true);
    scoreNivel1 += 30;
    scoreText1.setText('Puntaje: ' + scoreNivel1)
  }
  juntarPerro (player, dogi){
    dogi.disableBody(true, true);
    scoreNivel1 += 100;
    scoreText1.setText('Puntaje: ' + scoreNivel1)
  }

  hitPlayer (player, enemy){
    vidas -= 1;
    textVidas.setText('Vidas: ' + vidas)
  }

  gameOver(){
    gameOver = true;
    this.physics.pause();
    player.setTint(0xff0000);

    textGameOver = this.add.text(600, 500, 'HAS PERDIDO', 
    {font: 'bold 50pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textGameOver.scrollFactorX = 0;
    textGameOver.scrollFactorY = 0;
    /* textGameOver.setIteractive()
    textGameOver.on('pointerdown', () => this.scene.start('gameover')); */
  }
}
