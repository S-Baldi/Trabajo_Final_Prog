class cr1 extends Phaser.Scene{
  constructor(){
    super('creditos');
  }

  preload(){

  }

  create(){
    game.config.backgroundColor.setTo(108, 210, 222);

    logoU = this.add.image(400, 200, 'logou').setScale(0.2);
    logoPh = this.add.image(1000, 200, 'logoph').setScale(0.2);

    help = this.add.text(500, 550, 'Los controles del juego son...', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'})
  }
}