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
  scene: [sc1, sc2]
};

var game = new Phaser.Game(config);

var mapa;