var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  autoRezise: true,
  physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 350 },
        debug: false
      }
  },
};

var game = new Phaser.Game(config);

var mapa;

preload() 
{
  this.load.tilemapTiledJSON('mapa', 'assets/Mapa/Nivel1.json');
  this.load.image('tileset1', 'assets/Mapa/Back.tsx');
  this.load.image('tileset2', 'assets/Mapa/Tileset.tsx');
}

create() 
{
  mapa = this.make.tilemap ( { key : 'mapa' } );
  var tilesets1 = mapa.addTilesetImage ('Back', 'tileset1');
  var tilesets2 = mapa.addTilesetImage ('Tileset', 'tileset2');

  var Background = mapa.createDynamicLayer ('Background', tilesets1, 0, 0);
  var Plataformas = mapa.createDynamicLayer ('Plataformas', tilesets2, 0, 0);

}
