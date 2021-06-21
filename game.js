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
  scene: [prec, mp1, sc1, sc2, h1, cr1, go1, gw1, go2, gw2]
};

var game = new Phaser.Game(config);

/* Variables en Comun */
var player;
var enemy;
var cursors;
var moneda;
var monedaR;

var vidas = 3;
var textVidas;
var player_collider;
var player_collider2;
var tempo = 0;
var tempo2 = 0;
var dogi;
var initialTime;
var timeText;
var timedEvent;
var textGameOver;
var velocidadJugador = 200;
var scoreTotal = 0;

/* Variables Menu */
var empezarSc1;
var empezarSc2;
var logoMenu;
var fondoMenu;
var botonAyuda;
var botonCreditos;
var creditos;
var botonAtras;
var teclaR;
var teclaP;

/* Variables Nivel 1 */
var solidos;
var solidos22;
var backmontaña1;
var backmontaña2;
var backcielo1;
var backcielo2;
var mapa;
var scoreNivel1 = 0;
var scoreText1;
var gameOver;
var gameWin;

/* Variables Nivel 2 */
var backCueva11;
var backCueva22;
var backCueva33;
var backCueva44;
var solidosCueva1;
var solidosInvisibles;
var mapa2;
var puas11;
var puas22;
var scoreNivel2 = 0;
var scoreText2;
var gameOver2;
var gameWin2;

/* Créditos */
var logoPh;
var logoU;
var help;
var volverMenu;

/* Ayuda */
var volverMenu2;
var help2;
var teclas;
var imgPerro;
var imgPower;

/* GameOver */
var textGo;
var botonIrMenu;
var botonIrLevel2;

/* Música y Sonidos */
var musicaNivel1;
var musicaNivel2;
var musicaMenu;
var sonidoCoin;

/* Powerups */
var spawnTime;
var spawn;
var powerRed;
var powerAzul;
var powerYellow;
var sonidoPower;

/* Precarga */
var textPrecarga; 

/* Bala */
/* var fireButton;
var bala;
var weapon; */