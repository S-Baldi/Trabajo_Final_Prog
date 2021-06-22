class prec extends Phaser.Scene{
  constructor(){
    super('precarga');
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

    /* Menú */
    this.load.image('logo', 'assets/logo.png');
    this.load.image('fondo', 'assets/fondo.png');

    /* Personaje */
    this.load.spritesheet('dude', 'assets/solda2.png', {frameWidth:300, frameHeight: 345});
    this.load.spritesheet('dead', 'assets/muerto2.png', {frameWidth:300, frameHeight: 345});

    /* Enemigo */
    this.load.spritesheet('robot', 'assets/enemigo.png', {frameWidth:130, frameHeight:230});

    /* Perro */
    this.load.spritesheet('dogito', 'assets/Perro/perro.png' , {frameWidth:330, frameHeight:160});
    
    /* Moneda */
    this.load.spritesheet('coin', 'assets/moneda.png', {frameWidth:16, frameHeight:16});
    this.load.spritesheet('coinRed', 'assets/MonedaR.png', {frameWidth:16, frameHeight:16});

    /* Powerups */
    this.load.spritesheet('poderYellow', 'assets/Power/Yellow/powerY.png', {frameWidth:320, frameHeight:400});
    this.load.spritesheet('poderAzul', 'assets/Power/Blue/powerB.png', {frameWidth:320, frameHeight:400});
    this.load.spritesheet('poderRed', 'assets/Power/Red/powerR.png', {frameWidth:320, frameHeight:400});

    /* Ayuda */
    this.load.image('teclas', 'assets/teclas.png');
    this.load.image('dogi', 'assets/Perro/dog.png');
    this.load.image('allPower', 'assets/Power/todosPower.png');
    
    /* Créditos */
    this.load.image('logoph', 'assets/logoPhaser.png');
    this.load.image('logou', 'assets/logoU.png');

    /* Sonidos */
    this.load.audio('coinDorada', 'audio/coin.wav');
    this.load.audio('musicaMenu', 'audio/menu.wav');
    this.load.audio('musicaLevel1', 'audio/nivel1.mp3');
    this.load.audio('musicaLevel2', 'audio/level2.ogg');
    this.load.audio('pauer', 'audio/powerup.wav')
  }

  create(){    
    logoMenu = this.add.image(700, 250, 'logo').setScale(1);
    textPrecarga = this.add.text(600, 550, 'Cargando...',
    { font: 'bold 30pt Arial', fill: '#ffffff'})
  }

  update(time, delta)
  {
    tempo += delta
    if (tempo >= 5000){
      tempo = 0
      this.scene.start('menu'); 
    }
  }
}