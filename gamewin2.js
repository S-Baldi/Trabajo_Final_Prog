class gw2 extends Phaser.Scene{
  constructor(){
    super('gamewin2');
  }

  preload(){

  }

  create(){
    scoreTotal = scoreTotal + scoreNivel1 + scoreNivel2;
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoMenu = this.add.image(700, 200, 'logo').setScale(0.8);
    textGo = this.add.text(270, 400, 'HAS GANADO EL JUEGO \n', 
    {font: 'bold 50pt Arial', fontSize: '36px', fill: '#00ff00', align:'center'});
    textGo =this.add.text(480, 500, 'Puntos Obtenidos : ' + scoreNivel2 , 
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textGo =this.add.text(450, 570, 'Puntos Totales : ' + scoreTotal , 
    {font: 'bold 40pt Arial', fontSize: '36px', fill: '#fff', align:'center'});

    botonIrMenu = this.add.text(50, 500, 'Menú', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu')&& button.play({volume:0.5}))

  }

}