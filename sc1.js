class sc1 extends Phaser.Scene{
  constructor(){
    super('escena1');
  }


  preload(){
    this.load.tilemapTiledJSON('mapa', 'assets/Mapa/TileMap.json');
    this.load.image('tiles', 'assets/Mapa/TileSet.png');

  }

  create(){
    mapa = this.make.tilemap({ key : 'mapa'});
    var tilesets = mapa.addTilesetImage('TileSet', 'tiles');

    var solidos = mapa.createDynamicLayer('solidos', tilesets, 0, 0);

  }
}
