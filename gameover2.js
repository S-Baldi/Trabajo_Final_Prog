class go2 extends Phaser.Scene{
  constructor(){
    super('gameover2');
  }

  preload(){
    if (cursors =! undefined){
      cursors = this.input.keyboard.createCursorKeys();
      teclaR = this.input.keyboard.addKey('R');
      teclaP = this.input.keyboard.addKey('P');
    }

  }

  create(){
    fondoMenu = this.add.image(700, 300, 'fondo');

    logoMenu = this.add.image(700, 200, 'logo').setScale(0.8);
    textGo = this.add.text(470, 400, 'HAS PERDIDO \n',
    {font: 'bold 50pt Arial', fontSize: '36px', fill: '#ff0000', align:'center'});
    textGo =this.add.text(480, 500, 'Puntos Obtenidos : ' + scoreNivel2,
    {font: 'bold 30pt Arial', fontSize: '36px', fill: '#fff', align:'center'});
    textGo =this.add.text(550, 580, 'Presiona R para reintentar',
    {font: 'italic 20pt Arial', fontSize: '36px', fill: '#fff', align:'center'});

    botonIrMenu = this.add.text(50, 500, 'Menú', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(50, 500, 'Menu', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('menu')&& button.play({volume:0.5}))

  }

  update(){
    if (teclaR.isDown){
      this.scene.start('escena2')
    }
  }
}