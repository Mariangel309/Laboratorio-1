import { Start } from './Scenes/Start.js';
import { EscenaHistoria } from './Scenes/EscenaHistoria.js';
import { Instrucciones } from './Scenes/Instrucciones.js';
import { Ventana1 } from './Scenes/Ventana1.js';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Start,
        EscenaHistoria,
        Instrucciones,
        Ventana1
    ]
};

new Phaser.Game(config);