class cr1 extends Phaser.Scene{
  constructor(){
    super('creditos');
  }

  preload(){

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoU = this.add.image(700, 700, 'logou').setScale(0.2);
    logoPh = this.add.image(500, 200, 'logoph').setScale(0.6);
    logoMenu = this.add.image(900, 200, 'logo').setScale(0.8);
    help = this.add.text(500, 400,'Left 2 Dead', { font: 'italic 50pt Arial', fontSize: '36px', fill: '#ffffff'})
    help = this.add.text(450, 500,'-Baldi, Santiago Nahuel\n-Castelnovo, Renzo Axel', { font: 'bold 30pt Arial', fontSize: '36px', fill: '#ffffff'})
  
    volverMenu = this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Atrás', { font: 'italic 30pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu')&& button.play({volume:0.5}))
  }
}