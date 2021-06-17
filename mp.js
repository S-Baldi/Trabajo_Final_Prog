class mp1 extends Phaser.Scene{
  constructor(){
    super('menu');
  }

  preload()
  {
    /* Nivel 1 */
    this.load.tilemapTiledJSON('mapa', 'assets/Mapa/Sc1.json');
    this.load.image('plataformas', 'assets/Mapa/TileSet2.png');
    this.load.image('fondomontaña', 'assets/Mapa/Fondo.png');
    this.load.image('fondomontaña2', 'assets/Mapa/Fondo2.png');
    this.load.image('fondocielo', 'assets/Mapa/Cielo1.png');
    this.load.image('fondocielo2', 'assets/Mapa/Cielo2.png');

    /* Nivel 2 */
    this.load.tilemapTiledJSON('mapa2', 'assets/Mapa2/cave con background.json');
    this.load.image('fondoCueva1', 'assets/Mapa2/background cave 1.png');
    this.load.image('fondoCueva2', 'assets/Mapa2/background cave 2.png');
    this.load.image('fondoCueva3', 'assets/Mapa2/background cave 3.png');
    this.load.image('fondoCueva4', 'assets/Mapa2/background cave 4.png');
    this.load.image('plataformaCueva', 'assets/Mapa2/cave_grass_joint_tileset.png');
    this.load.image('puasCueva', 'assets/Mapa2/Puas.png')

    /* Personaje */
    this.load.spritesheet('dude', 'assets/solda2.png', {frameWidth:300, frameHeight: 345});

    /* Enemigo */
    this.load.spritesheet('robot', 'assets/enemigo.png', {frameWidth:130, frameHeight:230});
    
    /* Moneda */
    this.load.spritesheet('coin', 'assets/moneda.png', {frameWidth:16, frameHeight:16});

    /* Powerups */
    this.load.image('poder1', 'assets/Power/Blue/frame 1.png');
    this.load.spritesheet('poderAzul', 'assets/Power/Blue/powerB.png', {frameWidth:320, frameHeight:400});
    this.load.image('poder2', 'assets/Power/Green/frame 1.png');
    this.load.image('poder3', 'assets/Power/Yellow/frame 1.png');
    this.load.image('poder4', 'assets/Power/Red/frame 1.png');

    /* Menú */
    this.load.image('logo', 'assets/logo.png');
    this.load.image('fondo', 'assets/fondo.png');

    /* Ayuda */
    this.load.image('teclas', 'assets/teclas.png');
    this.load.image('dogi', 'assets/Perro/dog.png');
    
    /* Créditos */
    this.load.image('logoph', 'assets/logoPhaser.png');
    this.load.image('logou', 'assets/logoU.png');

  }
  create()
  {
    /* Controles personaje */
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 0 }),
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
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 13 }),
      frameRate: 10,
      repeat: -1
    });

   

    /* Logo */
    fondoMenu = this.add.image(700, 300, 'fondo');
    logoMenu = this.add.image(700, 250, 'logo').setScale(0.8);

    /* Botones */
    empezarSc1 = this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('escena1'))

    empezarSc2 = this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('escena2'))

    botonAyuda = this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('ayuda'))

    botonCreditos = this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('creditos')) 

  }
  

  update(){}

}