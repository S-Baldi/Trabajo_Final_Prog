class prec extends Phaser.Scene{
  constructor(){
    super('precarga');
  }
  preload()
  {    
    this.load.image('logo', 'assets/logo.png');
  }

  create(){    
    logoMenu = this.add.image(700, 250, 'logo').setScale(1);
    textPrecarga = this.add.text(600, 550, 'Cargando...',
    { font: 'bold 30pt Arial', fill: '#ffffff'})
  }

  update(time, delta)
  {
    tempo += delta
    if (tempo >= 2000){
      tempo = 0
      this.scene.start('menu'); 
    }
  }
}