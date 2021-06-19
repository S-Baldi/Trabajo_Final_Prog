class go1 extends Phaser.Scene{
  constructor(){
    super('gameover');
  }

  preload(){

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoMenu = this.add.image(700, 200, 'logo').setScale(0.8);
    textGo = this.add.text(470, 400, 'HAS PERDIDO \n', 
    {font: 'bold 50pt Arial', fontSize: '36px', fill: '#ff0000', align:'center'});
    textGo =this.add.text(500, 500, 'Puntos Obtenidos : ' + scoreNivel1 , 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textGo =this.add.text(450, 580, 'Presiona R para reintentar' , 
    {font: 'italic 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});

    botonIrMenu = this.add.text(50, 500, 'Menú', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu'))

  }

}