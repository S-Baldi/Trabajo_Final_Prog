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

    mapa = this.make.tilemap({ key : 'mapa2'});
    var backCueva1 = mapa.addTilesetImage('back1', 'fondoCueva4');
    var backCueva2 = mapa.addTilesetImage('back2', 'fondoCueva3');
    var backCueva3 = mapa.addTilesetImage('back3', 'fondoCueva2');
    var backCueva4 = mapa.addTilesetImage('back4', 'fondoCueva1');
    var solidosCueva = mapa.addTilesetImage('plataformas', 'plataformaCueva');

    /* Capas */
    backCueva11 = mapa.createLayer('back1', backCueva1, 0, 0);
    backCueva22 = mapa.createLayer('back2', backCueva2, 0, 0);
    backCueva33 = mapa.createLayer('back3', backCueva3, 0, 0);
    backCueva44 = mapa.createLayer('back4', backCueva4, 0, 0);
    solidosCueva1 = mapa.createLayer('plataformas', solidosCueva, 0, 0);
    solidosCueva1.setCollisionByProperty({ solido:true });

    /* Personaje */
    player = this.physics.add.sprite(100, 100, 'dude');
    /* player.setCollideWorldBounds(true); */
    player.setBounce(0.2);
    player.setScale(0.18);

    /* Cambiar tamaño de hitbox */
    /* player.setSize(25, 0);  */

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 7 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 14 }),
      frameRate: 10,
      repeat: -1
    });

    /* Primero: sacar colisiones del personaje con el mundo 
    this.camera.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels); 
    this.camera.main.starFollow(player); */
    this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
    this.cameras.main.startFollow(player);    

    this.physics.add.collider(player, solidosCueva1);
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