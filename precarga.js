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