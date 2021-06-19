class gw1 extends Phaser.Scene{
  constructor(){
    super('gamewin');
  }

  preload(){

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoMenu = this.add.image(700, 200, 'logo').setScale(0.8);
    textGo = this.add.text(470, 400, 'HAS GANADO \n', 
    {font: 'bold 50pt Arial', fontSize: '36px', fill: '#00ff00', align:'center'});
    textGo =this.add.text(500, 500, 'Puntos Obtenidos : ' + scoreNivel1 , 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});

    botonIrMenu = this.add.text(50, 500, 'Menú', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu'))

  }

}