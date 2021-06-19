class h1 extends Phaser.Scene{
  constructor(){
    super('ayuda');
  }

  preload(){

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    teclas = this.add.image(400, 100, 'teclas').setScale(0.4);
    help2 = this.add.text(600, 150, 'Usa las flechas para mover al personaje', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    moneda = this.add.image(450, 260, 'coin').setScale(2);
    imgPerro = this.add.image(350, 260,'dogi').setScale(0.5);
    help2 = this.add.text (500, 260, 'Recolecta las monedas y salva a los perros para ganar puntos', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    enemy = this.add.image(400, 420, 'robot').setScale(0.8);
    help2 = this.add.text (500, 420, 'No dejes que los enemigos te maten', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});

    imgPower = this.add.image (400, 580, 'allPower').setScale(0.2);
    help2 = this.add.text (550, 570, 'Recolecta los orbes para obtener poderes', 
    { font: 'bold 20pt Arial', fill: '#ffffff'});



    volverMenu2 = this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Atrás', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu'))
  }
}