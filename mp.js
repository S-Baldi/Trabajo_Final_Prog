class mp1 extends Phaser.Scene{
  constructor(){
    super('menu');
  }

  preload (){
    

  }
  create()
  {
    /* Controles personaje */
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 7 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 13 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'river',
      frames: [ { key: 'dead', frame: 0} ],
      frameRate:20
    })  

    /* Logo */
    fondoMenu = this.add.image(700, 300, 'fondo');
    logoMenu = this.add.image(700, 250, 'logo').setScale(0.8);

    /* Botones */
    empezarSc1 = this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(500, 550, 'Empezar', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('escena1') && musicaMenu.stop()) 

    empezarSc2 = this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(800, 550, 'Empezar2', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('escena2') && musicaMenu.stop())

    botonAyuda = this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(1000, 550, 'Ayuda', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('ayuda') && musicaMenu.stop())

    botonCreditos = this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fill: '#ffffff'})
    .setInteractive()
    .on('pointerover', () => this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#FF2D00'}))
    .on('pointerout', () => this.add.text(300, 550, 'Créditos', { font: 'bold 20pt Arial', fontSize: '36px', fill: '#ffffff'}))
    .on('pointerdown', () => this.scene.start('creditos') && musicaMenu.stop()) 

    musicaMenu = this.sound.add('musicaMenu');
    musicaMenu.play({volume:0.2, loop:true});

    scoreTotal = 0;
  }

  update(){}

}