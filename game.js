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
  scene: [mp1, sc1, sc2, h1, cr1]
};

var game = new Phaser.Game(config);

/* Variables en Comun */
var player;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var cursors;
var moneda;
var power1;
var power2;
var power3;
var power4;
var timedEvent;
var initialTime;
var timeText;

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
var backmontaña1;
var backmontaña2;
var backcielo1;
var backcielo2;
var mapa;

/* Variables Nivel 2 */
var backCueva11;
var backCueva22;
var backCueva33;
var backCueva44;
var solidosCueva1;
var mapa2;
var puas11;
var puas22;

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

/* Bala */
/* var fireButton;
var bala;
var weapon; */