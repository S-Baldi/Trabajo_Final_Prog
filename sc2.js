class sc2 extends Phaser.Scene{
  constructor(){
    super('escena2');
  }
  preload(){

  }

  create(){
    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
      teclaR = this.input.keyboard.addKey('R');
      teclaP = this.input.keyboard.addKey('P');
    }

    mapa2 = this.make.tilemap({ key : 'mapa2'});
    var backCueva1 = mapa2.addTilesetImage('back1', 'fondoCueva4');
    var backCueva2 = mapa2.addTilesetImage('back2', 'fondoCueva3');
    var backCueva3 = mapa2.addTilesetImage('back3', 'fondoCueva2');
    var backCueva4 = mapa2.addTilesetImage('back4', 'fondoCueva1');
    var puas1 = mapa2.addTilesetImage('Puas', 'puasCueva');
    var solidosCueva = mapa2.addTilesetImage('plataformas', 'plataformaCueva');
    var solidosInvisibles2 = mapa2.addTilesetImage('plataformas', 'plataformaCueva')

    /* Capas */
    solidosInvisibles = mapa2.createLayer('invisibles', solidosInvisibles2, 0, 0);
    solidosInvisibles.setCollisionByProperty({invisibles2:true});
    backCueva11 = mapa2.createLayer('back1', backCueva1, 0, 0);
    backCueva22 = mapa2.createLayer('back2', backCueva2, 0, 0);
    backCueva33 = mapa2.createLayer('back3', backCueva3, 0, 0);
    backCueva44 = mapa2.createLayer('back4', backCueva4, 0, 0);    
    puas11 = mapa2.createLayer('puas', puas1, 0, 0);
    puas11 = mapa2.createLayer('puas2', puas1, 0, 0);
    puas11.setCollisionByProperty({solidopua: true});
    solidosCueva1 = mapa2.createLayer('plataformas', solidosCueva, 0, 0);
    solidosCueva1.setCollisionByProperty({ solido:true });

    /* Personaje */
    player = this.physics.add.sprite(100, 100, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);
    player.setScale(0.2);
    /* Cambiar tamaño de hitbox */
    player.setSize(200, 300);
    this.cameras.main.setBounds(0, 0, mapa2.widthInPixels, mapa2.heightInPixels);
    this.cameras.main.startFollow(player);

    /* Enemigo */
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
      duration: 4000,
      loop: -1,
      yoyo:-1,
      tweens:[
        {x:400}
      ]
    })
    /* Moneda */    
    /* Animacion moneda */
    moneda = this.physics.add.group({
      key: 'coin',
      repeat: 14,
      setXY: {x: 50, y:Phaser.Math.FloatBetween(50, 800), stepX: Phaser.Math.Between(50, 70)},
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

    /* Collider */  
    this.physics.add.collider(player, solidosCueva1);
    player_collider2 = this.physics.add.collider(player, puas11, this.hitPlayer2, null, this);
    player_collider = this.physics.add.collider(player, enemy, this.hitPlayer, null, this);
    this.physics.add.collider(moneda, solidosCueva1);
    this.physics.add.collider(monedaR, solidosCueva1);
    this.physics.add.collider(enemy, solidosCueva1);
    this.physics.add.collider(enemy, solidosCueva1);
    this.physics.add.collider(dogi, solidosCueva1);
    this.physics.add.collider(enemy, solidosInvisibles);
    
    /* Overlaps */
    this.physics.add.overlap(player, moneda, this.juntarMonedas);
    this.physics.add.overlap(player, monedaR, this.juntarMonedasRed, null, this);
    this.physics.add.overlap(player, dogi, this.juntarPerro, null, this);

    
    /* Variables */
    scoreNivel2 = 0;
    scoreText1 = this.add.text(550, 0, 'Puntaje: ' +scoreNivel2, 
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});    
    scoreText1.scrollFactorX = 0;
    scoreText1.scrollFactorY = 0;
    
    vidas = 3;
    textVidas = this.add.text(200, 0, 'Vidas: ' + vidas,
    { font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textVidas.scrollFactorX = 0;
    textVidas.scrollFactorY = 0;
    
    initialTime = 40;
    timeText = this.add.text(950, 0, 'Tiempo: ' + initialTime, 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    timeText.scrollFactorX = 0;
    timeText.scrollFactorY = 0;   
    timedEvent = this.time.addEvent(
      {delay: 1000, callback: this.onSecond, callbackScope: this, loop: true});
    
    velocidadJugador = 200;

    gameOver2 = false;
    gameWin2 = false;
    
    sonidoCoin = this.sound.add('coinDorada');

    spawn = Phaser.Math.FloatBetween(1, 3);
    spawnTime = 0; 
    
    musicaNivel2 = this.sound.add('musicaLevel2');
    musicaNivel2.play({volume: 0.2, loop: true});

    sonidoPower = this.sound.add('pauer');
  }

  update(time, delta){
    if (teclaR.isDown)
    {
      this.scene.restart();
    }
    if (teclaP.isDown)
    {
      this.physics.pause();
    }

    if (cursors.left.isDown)
    {
      player.setVelocityX(-velocidadJugador);
      player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
      player.setVelocityX(velocidadJugador);
      player.anims.play('right', true);
    }
    else
    {
      player.setVelocityX(0);
      player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.blocked.down)
    {     
      player.setVelocityY(-400);  
    }

    if(scoreNivel2>100){
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
    if(!player_collider2.active)
    {
      tempo2+=delta
      if(tempo2>=2000) 
      {
        player_collider2.active=true
        tempo2=0
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
      if(spawnTime >= 15000)
      {
        spawnTime = 0
        this.spawnPowerUpAzul()
      }
    }

    if (spawn=2)
    {       
      spawnTime += delta;
      if(spawnTime >= 15000)
      {
        spawnTime = 0
        this.spawnPowerUpRed()
      }
    }

    if (spawn=3)
    {
      spawnTime += delta;
      if(spawnTime >= 15000)
      {
        spawnTime = 0
        this.spawnPowerUpYellow()
      }
    }

    if (enemy.x > 0){
      enemy.setVelocityX(-200)
    }
  }
    /* POWERUPS */
                    /* PODER AZUL */
  spawnPowerUpAzul(){    
    powerAzul = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderAzul');
    this.physics.add.collider(powerAzul, solidosCueva1);
    this.physics.add.overlap(player, powerAzul, this.PowerUpAzul, null, this);
    powerAzul.setScale(0.12);
  }  
  PowerUpAzul(player, powerAzul){    
    powerAzul.disableBody(true, true);
    player.setVelocityX(velocidadJugador = velocidadJugador + 100);
  }
                    /* PODER ROJO */
  spawnPowerUpRed(){    
    powerRed = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderRed');
    this.physics.add.overlap(player, powerRed, this.PowerUpRed, null, this);
    this.physics.add.collider(powerRed, solidosCueva1);    
    powerRed.setScale(0.12);
  }
  PowerUpRed(player, powerRed){
    powerRed.disableBody(true, true);
    vidas += 1;
    textVidas.setText('Vidas: '+ vidas)
  }
                    /* PODER AMARILLO */
  spawnPowerUpYellow(){    
    powerYellow = this.physics.add.sprite (Phaser.Math.Between(100, 1000), Phaser.Math.Between(100, 500), 'poderYellow');
    this.physics.add.collider(powerYellow, solidosCueva1);    
    this.physics.add.overlap(player, powerYellow, this.PowerUpYellow, null, this);
    powerYellow.setScale(0.12);
  }
  PowerUpYellow(player, powerYellow){
    powerYellow.disableBody(true, true);
    initialTime = initialTime +10;
    timeText.setText('Tiempo: ' + initialTime)
  }

  /* HITS */
  hitPlayer2 (player, puas11)
  {
    vidas -= 1;
    textVidas.setText('Vidas: '+ vidas)
    player_collider2.active = false;
  }
  hitPlayer(player, enemy,)
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
    /* ITEMS */
  juntarMonedas (player, moned){
    moned.disableBody(true, true);
    scoreNivel2 += 10;
    scoreText1.setText('Puntaje: ' + scoreNivel2);

    /* Sonido */
    sonidoCoin.play({volume:0.4});

    if (moneda.countActive(true) === 0)
    {
      //  Nuevas monedas
      moneda.children.iterate(function (child) {
        child.enableBody(true, child.x, 200, true, true);
      });
    }
  }

  juntarMonedasRed (player, monedaRr){
    monedaRr.disableBody(true, true);
    scoreNivel2 += 30;
    scoreText1.setText('Puntaje: ' + scoreNivel2);

    /* Sonido */    
    sonidoCoin.play({volume:0.4});

    if (monedaR.countActive(true) === 0){
      /* Nuevas monedas rojas */
      monedaR.children.iterate(function(child){
        child.enableBody(true, child.x, 200, true, true);        
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
    scoreNivel2 += 100;
    scoreText1.setText('Puntaje: ' + scoreNivel2)

    /* Sonido */    
    sonidoCoin.play({volume:0.4});
  }  

  gameOver(){
    gameOver2 = true;
    this.physics.pause();  
    
    musicaNivel2.stop();

    textGameOver = this.add.text(400, 300, 'Has Perdido', 
    { fontFamily: 'Arial', fontSize: 110, color: '#ff0000'})
    .setInteractive()
    .on('pointerdown', () => this.scene.start('gameover2'));
    textGameOver.scrollFactorX = 0;
    textGameOver.scrollFactorY = 0;
  }

  gameWin(){
    gameWin2 = true;
    musicaNivel2.stop();
    this.physics.pause();
    this.scene.start('gamewin2');
  }
}