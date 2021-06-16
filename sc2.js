class sc2 extends Phaser.Scene{
  constructor(){
    super('escena2');
  }
  preload(){

  }

  create(){
    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
    }

    mapa2 = this.make.tilemap({ key : 'mapa2'});
    var backCueva1 = mapa2.addTilesetImage('back1', 'fondoCueva4');
    var backCueva2 = mapa2.addTilesetImage('back2', 'fondoCueva3');
    var backCueva3 = mapa2.addTilesetImage('back3', 'fondoCueva2');
    var backCueva4 = mapa2.addTilesetImage('back4', 'fondoCueva1');
    var solidosCueva = mapa2.addTilesetImage('plataformas', 'plataformaCueva');

    /* Capas */
    backCueva11 = mapa2.createLayer('back1', backCueva1, 0, 0);
    backCueva22 = mapa2.createLayer('back2', backCueva2, 0, 0);
    backCueva33 = mapa2.createLayer('back3', backCueva3, 0, 0);
    backCueva44 = mapa2.createLayer('back4', backCueva4, 0, 0);
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
    
   /* Robot */
  enemy = this.physics.add.sprite(250, 200, 'robot');
  enemy2 = this.physics.add.sprite(850, 200, 'robot');
  enemy.setBounce(0.2);
  enemy.setScale(0.25);
  enemy.setSize(140 , 230);
  enemy2.setBounce(0.2);
  enemy2.setScale(0.25);
  enemy2.setSize(140 , 230);
  let timeline = this.tweens.timeline({
    targets: enemy,
    ease: 'Power1',
    duration: 2000,
    loop: -1,
    yoyo:-1,
    tweens:[
      {x:enemy.x +400}
    ]
  })

  let timeline2 = this.tweens.timeline({
    targets: enemy2,
    ease: 'Power1',
    duration: 2000,
    loop: -1,
    yoyo:-1,
    tweens:[
      {x:enemy2.x +200}
    ]
  })  

    /* Colliders */    
    this.physics.add.collider(player, solidosCueva1);
    this.physics.add.collider(enemy, solidosCueva1);
    this.physics.add.collider(player, enemy);
    this.physics.add.collider(player, enemy2);
    this.physics.add.collider(enemy2, solidosCueva1);
    this.physics.add.collider(player, enemy2);
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
      player.setVelocityY(-400);  
    }
  }


}