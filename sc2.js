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

    /* Capas */
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
    
    this.physics.add.collider(player, solidosCueva1);
    this.physics.add.collider(player, puas11);

    
//Enemigo//
enemy = this.physics.add.sprite(180, 300, 'robot');
enemy2 = this.physics.add.sprite(825, 300, 'robot');
enemy3 = this.physics.add.sprite(415, 400, 'robot');
enemy4 = this.physics.add.sprite(1460, 650, 'robot');
enemy5 = this.physics.add.sprite(690, 650, 'robot');
enemy6 = this.physics.add.sprite(125, 750, 'robot');

//Colisión del enemigo con el mundo
this.physics.add.collider(enemy, solidosCueva1);
this.physics.add.collider(enemy, player);
this.physics.add.collider(enemy2, solidosCueva1);
this.physics.add.collider(enemy2, player);
this.physics.add.collider(enemy3, solidosCueva1);
this.physics.add.collider(enemy3, player);
this.physics.add.collider(enemy4, solidosCueva1);
this.physics.add.collider(enemy4, player);
this.physics.add.collider(enemy5, solidosCueva1);
this.physics.add.collider(enemy5, player)
this.physics.add.collider(enemy6, solidosCueva1);
this.physics.add.collider(enemy6, player);

//Configuración de escala del enemigo
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

    //Movimiento del enemigo

//enemy
if(enemy.x<185)
{
  enemy.setVelocityX(+100)
  // enemy.anims.play("derecha", true);
}
if(enemy.x>670)
{
  enemy.setVelocityX(-100)
  // enemy.anims.play("izquierda", true);
}

//enemy2
if(enemy2.x<830)
{
  enemy2.setVelocityX(+100)
  // anims.play("derecha", true);
}
if(enemy2.x>1500)
{
  enemy2.setVelocityX(-100)
  // anims.play("izquierda", true);
}

//enemy3
if(enemy3.x<420)
{
  enemy3.setVelocityX(+100)
// anims.play("derecha", true);
}
if(enemy3.x>865)
{
  enemy3.setVelocityX(-100)
  // anims.play("izquierda", true);
}

//enemy4
if(enemy4.x<793)
{
  enemy4.setVelocityX(+100)
  // anims.play("derecha", true);
}
if(enemy4.x>1450)
{
  enemy4.setVelocityX(-100)
  // anims.play("izquierda", true);
}

//enemy5
if(enemy5.x<150)
{
  enemy5.setVelocityX(+100)
  // anims.play("derecha", true);
}
if(enemy5.x>685)
{
  enemy5.setVelocityX(-100)
  // anims.play("izquierda", true);
}

//enemy6
if(enemy6.x<126)
{
  enemy6.setVelocityX(+200)
  // enemy.anims.play("derecha", true);
}
if(enemy6.x>1450)
{
  enemy6.setVelocityX(-200)
  // enemy.anims.play("izquierda", true);
}
  }


}