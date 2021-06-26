class cr1 extends Phaser.Scene{
  constructor(){
    super('creditos');
  }

  preload(){

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoU = this.add.image(700, 600, 'logou').setScale(0.2);
    logoPh = this.add.image(500, 150, 'logoph').setScale(0.4);
    logoMenu = this.add.image(900, 150, 'logo').setScale(0.6);
    help = this.add.text(500, 300,'Left 2 Dead', { font: 'italic 50pt Arial', fontSize: '36px', fill: '#ffffff'})
    help = this.add.text(450, 400,'-Baldi, Santiago Nahuel\n-Castelnovo, Renzo Axel', { font: 'bold 30pt Arial', fontSize: '36px', fill: '#ffffff'})
  
    volverMenu = this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu')&& button.play({volume:0.5}))
  }
}