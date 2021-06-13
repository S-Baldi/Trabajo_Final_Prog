var config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  autoRezise: true,
  physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 350 },
        debug: true
      }
  },
  scene: [mp1, sc1, sc2]
};

var game = new Phaser.Game(config);

var mapa;
var player;
var solidos;
var backmontaña1;
var backmontaña2;
var backcielo1;
var backcielo2;
var cursors;
var volverAtras;

/* Variables Nivel 2 */
var backCueva11;
var backCueva22;
var backCueva33;
var backCueva44;
var solidosCueva1;

const saltoJugador = -500;