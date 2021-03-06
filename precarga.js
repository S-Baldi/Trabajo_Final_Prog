class prec extends Phaser.Scene{
  constructor(){
    super('precarga');
  }
  preload()
  {
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
    this.load.image('allPower', 'assets/Power/todosPower2.png');
    
    /* Créditos */
    this.load.image('logoph', 'assets/logoPhaser.png');
    this.load.image('logou', 'assets/logoU.png');

    /* Sonidos */
    this.load.audio('coinDorada', 'audio/coin.wav');
    this.load.audio('musicaMenu', 'audio/menu.wav');
    this.load.audio('musicaLevel1', 'audio/level1.ogg');
    this.load.audio('musicaLevel2', 'audio/level2.ogg');
    this.load.audio('pauer', 'audio/powerup.wav');
    this.load.audio('button', 'audio/boton.mp3');
    this.load.audio('hit', 'audio/golpe.wav');
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