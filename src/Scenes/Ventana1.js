import { Dias, construirArbolDia } from '../structures/Personajes.js';
import { Sanciones } from '../structures/Sanciones.js';

export class Ventana1 extends Phaser.Scene {

    constructor() {
        super('Ventana1');
    }

    init(data) {
        data = data || {};

        this.diaActual = data.diaActual || 1;
        this.volumenActual = typeof data.volumenActual === 'number' ? data.volumenActual : 0.7;
        this.transicionEntrada = data.transicionEntrada || false;
        this.modoSoloFondo = data.modoSoloFondo || false;
        this.delitosEncontrados = data.delitosEncontrados || [];
        this.decisiones = {};

        if (this.diaActual >= 7) {
            this.diaActual = 7;
            this.modoSoloFondo = true;
        }
    }

    preload() {
        this.load.image('fondoOficina', 'assets/oficina.png');
        this.load.image('b1', 'assets/b1.png');
        this.load.image('b2', 'assets/b2.png');
        this.load.image('b3', 'assets/b3.png');
        this.load.image('b4', 'assets/b4.png');
        this.load.image('b5', 'assets/b5.png');
        this.load.image('b6', 'assets/b6.png');

        this.load.image('Bd', 'assets/Bd.png');
        this.load.image('Denc', 'assets/Denc.png');
        this.load.image('Dias', 'assets/Dias.png');
        this.load.image('Mand', 'assets/Mand.png');
        this.load.image('Find', 'assets/Find.png');
        this.load.image('back', 'assets/back.png');

        this.load.image('dia1', 'assets/dia1.png');
        this.load.image('dia2', 'assets/dia2.png');
        this.load.image('dia3', 'assets/dia3.png');
        this.load.image('dia4', 'assets/dia4.png');
        this.load.image('dia5', 'assets/dia5.png');
        this.load.image('dia6', 'assets/dia6.png');
        this.load.image('dia7', 'assets/dia7.png');

        this.load.audio('musicajugar', 'music/musicajugar.mp3');
        this.load.audio('musicaDia2', 'music/b1.mp3');
        this.load.audio('musicaDia3', 'music/b2.mp3');
        this.load.audio('musicaDia4', 'music/b3.mp3');
        this.load.audio('musicaDia5', 'music/b4.mp3');
        this.load.audio('musicaDia6', 'music/b5.mp3');
        this.load.audio('musicaDia7', 'music/b6.mp3');

        this.load.audio('click', 'music/click.mp3');

        // Fotos de personajes del día actual (assets/personajes/NOMBRE.png)
        const pjsDia = Dias[this.diaActual] || [];
        pjsDia.forEach(pj => {
            const fn = pj.nombre.split(' ')[0].toLowerCase();
            this.load.image(`pj_${fn}`, `Personajes/${fn}.png`);
        });
    }

    create() {
        this.yaTransicionando = false;
        this.modalAbierto = false;
        this.arrastrandoVolumen = false;

        this.crearTexturaTransicion();

        this.sonidoVentana = this.sound.add(this.obtenerMusicaDelDia(), {
            volume: 0,
            loop: true
        });

        if (!this.sonidoVentana.isPlaying) {
            this.sonidoVentana.play();
        }

        this.events.off('shutdown', this.detenerSonidos, this);
        this.events.off('destroy', this.detenerSonidos, this);
        this.events.on('shutdown', this.detenerSonidos, this);
        this.events.on('destroy', this.detenerSonidos, this);

        this.fondo = this.add.image(640, 360, this.obtenerBackgroundDelDia());
        this.fondo.setDisplaySize(1280, 720);
        this.fondo.setDepth(0);

        if (this.modoSoloFondo) {
            this.crearBotonBackFinal();
            this.crearTituloFinal();
            this.crearControlVolumen();
            this.iniciarFadeInMusica();

            if (this.transicionEntrada) {
                this.reproducirTransicionEntrada();
            }
            return;
        }

        this.bd = this.add.image(320, 225, 'Bd');
        this.bd.setDepth(5);
        this.bd.setScale(0.4);

        this.denc = this.add.image(930, 225, 'Denc');
        this.denc.setDepth(5);
        this.denc.setScale(0.4);

        this.dias = this.add.image(320, 550, 'Dias');
        this.dias.setDepth(5);
        this.dias.setScale(0.4);

        this.mand = this.add.image(840, 550, 'Mand');
        this.mand.setDepth(5);
        this.mand.setScale(0.4);

        this.find = this.add.image(1090, 610, 'Find');
        this.find.setDepth(5);
        this.find.setScale(0.28);

        this.dia1 = this.add.image(170, 532, 'dia1');
        this.dia1.setDepth(6);
        this.dia1.setScale(0.10);

        this.dia2 = this.add.image(270, 532, 'dia2');
        this.dia2.setDepth(6);
        this.dia2.setScale(0.10);

        this.dia3 = this.add.image(370, 532, 'dia3');
        this.dia3.setDepth(6);
        this.dia3.setScale(0.10);

        this.dia4 = this.add.image(470, 532, 'dia4');
        this.dia4.setDepth(6);
        this.dia4.setScale(0.10);

        this.dia5 = this.add.image(170, 632, 'dia5');
        this.dia5.setDepth(6);
        this.dia5.setScale(0.10);

        this.dia6 = this.add.image(270, 632, 'dia6');
        this.dia6.setDepth(6);
        this.dia6.setScale(0.10);

        this.dia7 = this.add.image(370, 632, 'dia7');
        this.dia7.setDepth(6);
        this.dia7.setScale(0.10);

        this.crearBotonBack();
        this.crearHitboxBuscadorFija();
        this.crearHitboxDencFija();
        this.crearHitboxMandFija();
        this.crearHitboxFindFija();
        this.crearHitboxDias();
        this.crearModalPersonalizado();
        this.crearControlVolumen();
        this.actualizarEstadoDias();

        this.personajesDia = Dias[this.diaActual] || [];
        this.elementosContenidoModal = [];
        if (this.personajesDia.length > 0) {
            construirArbolDia(this.diaActual);
        }

        this._generarAvataresFaltantes();

        this.iniciarFadeInMusica();

        if (this.transicionEntrada) {
            this.reproducirTransicionEntrada();
        }
    }

    reproducirClick() {
        this.sound.play('click', { volume: 0.45 });
    }

    obtenerBackgroundDelDia() {
        const fondos = {
            1: 'fondoOficina',
            2: 'b1',
            3: 'b2',
            4: 'b3',
            5: 'b4',
            6: 'b5',
            7: 'b6'
        };

        return fondos[this.diaActual] || 'fondoOficina';
    }

    obtenerMusicaDelDia() {
        const musica = {
            1: 'musicajugar',
            2: 'musicaDia2',
            3: 'musicaDia3',
            4: 'musicaDia4',
            5: 'musicaDia5',
            6: 'musicaDia6',
            7: 'musicaDia7'
        };

        return musica[this.diaActual] || 'musicajugar';
    }

    iniciarFadeInMusica() {
        if (!this.sonidoVentana) return;

        this.tweens.killTweensOf(this.sonidoVentana);
        this.sonidoVentana.setVolume(0);

        this.tweens.add({
            targets: this.sonidoVentana,
            volume: this.volumenActual,
            duration: 850,
            ease: 'Sine.easeOut'
        });
    }

    fadeOutMusica(callback) {
        if (!this.sonidoVentana || !this.sonidoVentana.isPlaying) {
            if (callback) callback();
            return;
        }

        this.tweens.killTweensOf(this.sonidoVentana);

        this.tweens.add({
            targets: this.sonidoVentana,
            volume: 0,
            duration: 500,
            ease: 'Sine.easeIn',
            onComplete: () => {
                if (callback) callback();
            }
        });
    }

    crearTexturaTransicion() {
        if (this.textures.exists('circuloNegroTransicion')) {
            return;
        }

        const g = this.make.graphics({ x: 0, y: 0, add: false });
        g.fillStyle(0x000000, 1);
        g.fillCircle(512, 512, 512);
        g.generateTexture('circuloNegroTransicion', 1024, 1024);
        g.destroy();
    }

    reproducirTransicionEntrada() {
        this.cameras.main.setZoom(1.04);

        this.overlayEntrada = this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.22);
        this.overlayEntrada.setDepth(290);

        this.circuloTransicion = this.add.image(640, 360, 'circuloNegroTransicion');
        this.circuloTransicion.setDepth(300);
        this.circuloTransicion.setScale(2.5);

        this.tweens.add({
            targets: this.circuloTransicion,
            scale: 0.001,
            duration: 700,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                if (this.circuloTransicion) {
                    this.circuloTransicion.destroy();
                    this.circuloTransicion = null;
                }
            }
        });

        this.tweens.add({
            targets: this.overlayEntrada,
            alpha: 0,
            duration: 520,
            onComplete: () => {
                if (this.overlayEntrada) {
                    this.overlayEntrada.destroy();
                    this.overlayEntrada = null;
                }
            }
        });

        this.tweens.add({
            targets: this.cameras.main,
            zoom: 1,
            duration: 700,
            ease: 'Quad.easeOut'
        });
    }

    reproducirTransicionSalida(callback) {
        this.cameras.main.setZoom(1);

        this.overlaySalida = this.add.rectangle(640, 360, 1280, 720, 0x000000, 0);
        this.overlaySalida.setDepth(295);

        this.circuloTransicion = this.add.image(640, 360, 'circuloNegroTransicion');
        this.circuloTransicion.setDepth(300);
        this.circuloTransicion.setScale(0.001);

        this.tweens.add({
            targets: this.circuloTransicion,
            scale: 2.5,
            duration: 700,
            ease: 'Cubic.easeIn'
        });

        this.tweens.add({
            targets: this.overlaySalida,
            alpha: 0.32,
            duration: 520
        });

        this.tweens.add({
            targets: this.cameras.main,
            zoom: 1.06,
            duration: 700,
            ease: 'Quad.easeIn',
            onComplete: () => {
                if (callback) callback();
            }
        });
    }

    crearBotonBack() {
        this.backBtn = this.add.image(85, 40, 'back');
        this.backBtn.setDepth(50);
        this.backBtn.setScale(0.20);

        this.backZone = this.add.zone(85, 55, 140, 50);
        this.backZone.setDepth(51);
        this.backZone.setInteractive({ cursor: 'pointer' });

        this.backZone.on('pointerover', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.backBtn);
            this.tweens.add({
                targets: this.backBtn,
                scale: 0.215,
                duration: 120
            });
        });

        this.backZone.on('pointerout', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.backBtn);
            this.tweens.add({
                targets: this.backBtn,
                scale: 0.20,
                duration: 120
            });
        });

        this.backZone.on('pointerdown', () => {
            if (this.modalAbierto || this.yaTransicionando) return;
            this.reproducirClick();
            this.irAStart();
        });
    }

    crearBotonBackFinal() {
        this.backBtn = this.add.image(85, 40, 'back');
        this.backBtn.setDepth(80);
        this.backBtn.setScale(0.20);

        this.backZone = this.add.zone(85, 55, 140, 50);
        this.backZone.setDepth(81);
        this.backZone.setInteractive({ cursor: 'pointer' });

        this.backZone.on('pointerover', () => {
            this.tweens.killTweensOf(this.backBtn);
            this.tweens.add({
                targets: this.backBtn,
                scale: 0.215,
                duration: 120
            });
        });

        this.backZone.on('pointerout', () => {
            this.tweens.killTweensOf(this.backBtn);
            this.tweens.add({
                targets: this.backBtn,
                scale: 0.20,
                duration: 120
            });
        });

        this.backZone.on('pointerdown', () => {
            if (this.yaTransicionando) return;
            this.reproducirClick();
            this.irAStart();
        });
    }

    crearTituloFinal() {
        this.tituloFinalBg = this.add.rectangle(640, 52, 240, 52, 0x091427, 0.88);
        this.tituloFinalBg.setDepth(79);
        this.tituloFinalBg.setStrokeStyle(2, 0x78a7ff, 1);

        this.tituloFinal = this.add.text(640, 52, 'Día 7', {
            fontFamily: '"VT323", monospace',
            fontSize: '34px',
            color: '#ffffff',
            stroke: '#09111f',
            strokeThickness: 4
        });
        this.tituloFinal.setOrigin(0.5);
        this.tituloFinal.setDepth(80);
    }

    crearHitboxBuscadorFija() {
        this.hitboxBd = this.add.zone(310, 225, 460, 310);
        this.hitboxBd.setDepth(30);
        this.hitboxBd.setInteractive({ cursor: 'pointer' });

        this.hitboxBd.on('pointerover', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.bd);
            this.tweens.add({
                targets: this.bd,
                scale: 0.43,
                duration: 120
            });
        });

        this.hitboxBd.on('pointerout', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.bd);
            this.tweens.add({
                targets: this.bd,
                scale: 0.4,
                duration: 120
            });
        });

        this.hitboxBd.on('pointerdown', () => {
            if (this.modalAbierto) return;
            this.reproducirClick();
            this.abrirModalPrincipal('buscar');
        });
    }

    crearHitboxDencFija() {
        this.hitboxDenc = this.add.zone(930, 210, 440, 240);
        this.hitboxDenc.setDepth(30);
        this.hitboxDenc.setInteractive({ cursor: 'pointer' });

        this.hitboxDenc.on('pointerover', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.denc);
            this.tweens.add({
                targets: this.denc,
                scale: 0.43,
                duration: 120
            });
        });

        this.hitboxDenc.on('pointerout', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.denc);
            this.tweens.add({
                targets: this.denc,
                scale: 0.4,
                duration: 120
            });
        });

        this.hitboxDenc.on('pointerdown', () => {
            if (this.modalAbierto) return;
            this.reproducirClick();
            this.abrirModalPrincipal('encontrados');
        });
    }

    crearHitboxMandFija() {
        this.hitboxMand = this.add.zone(840, 550, 260, 120);
        this.hitboxMand.setDepth(30);
        this.hitboxMand.setInteractive({ cursor: 'pointer' });

        this.hitboxMand.on('pointerover', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.mand);
            this.tweens.add({
                targets: this.mand,
                scale: 0.43,
                duration: 120
            });
        });

        this.hitboxMand.on('pointerout', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.mand);
            this.tweens.add({
                targets: this.mand,
                scale: 0.4,
                duration: 120
            });
        });

        this.hitboxMand.on('pointerdown', () => {
            if (this.modalAbierto) return;
            this.reproducirClick();
            this.abrirModalPrincipal('manual');
        });
    }

    crearHitboxFindFija() {
        this.hitboxFind = this.add.zone(1090, 610, 220, 100);
        this.hitboxFind.setDepth(30);
        this.hitboxFind.setInteractive({ cursor: 'pointer' });

        this.hitboxFind.on('pointerover', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.find);
            this.tweens.add({
                targets: this.find,
                scale: 0.31,
                duration: 120
            });
        });

        this.hitboxFind.on('pointerout', () => {
            if (this.modalAbierto) return;
            this.tweens.killTweensOf(this.find);
            this.tweens.add({
                targets: this.find,
                scale: 0.28,
                duration: 120
            });
        });

        this.hitboxFind.on('pointerdown', () => {
            if (this.modalAbierto || this.yaTransicionando) return;
            this.reproducirClick();
            this.finalizarDia();
        });
    }

    crearHitboxDias() {
        this.hitboxDia1 = this.add.zone(170, 532, 90, 90);
        this.hitboxDia1.setDepth(30);
        this.hitboxDia1.setInteractive({ cursor: 'pointer' });

        this.hitboxDia2 = this.add.zone(270, 532, 90, 90);
        this.hitboxDia2.setDepth(30);
        this.hitboxDia2.setInteractive({ cursor: 'pointer' });

        this.hitboxDia3 = this.add.zone(370, 532, 90, 90);
        this.hitboxDia3.setDepth(30);
        this.hitboxDia3.setInteractive({ cursor: 'pointer' });

        this.hitboxDia4 = this.add.zone(470, 532, 90, 90);
        this.hitboxDia4.setDepth(30);
        this.hitboxDia4.setInteractive({ cursor: 'pointer' });

        this.hitboxDia5 = this.add.zone(170, 632, 90, 90);
        this.hitboxDia5.setDepth(30);
        this.hitboxDia5.setInteractive({ cursor: 'pointer' });

        this.hitboxDia6 = this.add.zone(270, 632, 90, 90);
        this.hitboxDia6.setDepth(30);
        this.hitboxDia6.setInteractive({ cursor: 'pointer' });

        this.hitboxDia7 = this.add.zone(370, 632, 90, 90);
        this.hitboxDia7.setDepth(30);
        this.hitboxDia7.setInteractive({ cursor: 'pointer' });

        this.configurarBotonDia(this.hitboxDia1, this.dia1, 1);
        this.configurarBotonDia(this.hitboxDia2, this.dia2, 2);
        this.configurarBotonDia(this.hitboxDia3, this.dia3, 3);
        this.configurarBotonDia(this.hitboxDia4, this.dia4, 4);
        this.configurarBotonDia(this.hitboxDia5, this.dia5, 5);
        this.configurarBotonDia(this.hitboxDia6, this.dia6, 6);
        this.configurarBotonDia(this.hitboxDia7, this.dia7, 7);
    }

    configurarBotonDia(hitbox, spriteDia, numeroDia) {
        hitbox.on('pointerover', () => {
            if (this.modalAbierto) return;
            if (numeroDia !== this.diaActual) return;
            this.tweens.killTweensOf(spriteDia);
            this.tweens.add({
                targets: spriteDia,
                scale: 0.115,
                duration: 120
            });
        });

        hitbox.on('pointerout', () => {
            if (numeroDia !== this.diaActual) return;
            this.tweens.killTweensOf(spriteDia);
            this.tweens.add({
                targets: spriteDia,
                scale: 0.10,
                duration: 120
            });
        });

        hitbox.on('pointerdown', () => {
            if (this.modalAbierto) return;
            if (numeroDia !== this.diaActual) return;
            this.reproducirClick();
            this.abrirModalDia(numeroDia);
        });
    }

    actualizarEstadoDias() {
        const dias = [
            { numero: 1, sprite: this.dia1, zone: this.hitboxDia1 },
            { numero: 2, sprite: this.dia2, zone: this.hitboxDia2 },
            { numero: 3, sprite: this.dia3, zone: this.hitboxDia3 },
            { numero: 4, sprite: this.dia4, zone: this.hitboxDia4 },
            { numero: 5, sprite: this.dia5, zone: this.hitboxDia5 },
            { numero: 6, sprite: this.dia6, zone: this.hitboxDia6 },
            { numero: 7, sprite: this.dia7, zone: this.hitboxDia7 }
        ];

        dias.forEach(dia => {
            dia.sprite.setScale(0.10);

            if (dia.numero === this.diaActual) {
                dia.sprite.clearTint();
                dia.sprite.setAlpha(1);

                if (!this.modalAbierto) {
                    dia.zone.setInteractive({ cursor: 'pointer' });
                }
            } else {
                dia.sprite.setTint(0x666666);
                dia.sprite.setAlpha(0.35);
                dia.zone.disableInteractive();
            }
        });
    }

    crearControlVolumen() {
        this.panelVol = this.add.rectangle(1115, 42, 260, 54, 0x091427, 0.9);
        this.panelVol.setDepth(60);
        this.panelVol.setStrokeStyle(2, 0x78a7ff, 1);

        this.volLabel = this.add.text(1038, 42, 'VOL', {
            fontFamily: '"VT323", monospace',
            fontSize: '26px',
            color: '#ffffff',
            stroke: '#09111f',
            strokeThickness: 3
        });
        this.volLabel.setOrigin(0.5);
        this.volLabel.setDepth(61);

        this.sliderX = 1152;
        this.sliderY = 42;
        this.sliderWidth = 135;

        this.sliderTrack = this.add.rectangle(this.sliderX, this.sliderY, this.sliderWidth, 10, 0x172642, 1);
        this.sliderTrack.setDepth(61);
        this.sliderTrack.setStrokeStyle(1, 0x8eb8ff, 1);

        this.sliderFill = this.add.rectangle(
            this.sliderX - this.sliderWidth / 2,
            this.sliderY,
            Math.max(4, this.sliderWidth * this.volumenActual),
            10,
            0x66b3ff,
            1
        );
        this.sliderFill.setOrigin(0, 0.5);
        this.sliderFill.setDepth(62);

        this.sliderGlow = this.add.rectangle(
            this.sliderX - this.sliderWidth / 2,
            this.sliderY,
            Math.max(4, this.sliderWidth * this.volumenActual),
            4,
            0xbfe1ff,
            0.9
        );
        this.sliderGlow.setOrigin(0, 0.5);
        this.sliderGlow.setDepth(63);

        this.sliderKnob = this.add.circle(
            this.sliderX - this.sliderWidth / 2 + this.sliderWidth * this.volumenActual,
            this.sliderY,
            11,
            0xffffff,
            1
        );
        this.sliderKnob.setDepth(64);
        this.sliderKnob.setStrokeStyle(3, 0x2558a8, 1);

        this.sliderZone = this.add.zone(this.sliderX, this.sliderY, this.sliderWidth + 40, 34);
        this.sliderZone.setDepth(65);
        this.sliderZone.setInteractive({ cursor: 'pointer' });

        this.sliderZone.on('pointerdown', (pointer) => {
            this.arrastrandoVolumen = true;
            this.actualizarVolumenDesdePointer(pointer.x);
        });

        this.sliderZone.on('pointerover', () => {
            this.sliderKnob.setFillStyle(0xe8f4ff, 1);
        });

        this.sliderZone.on('pointerout', () => {
            if (!this.arrastrandoVolumen) {
                this.sliderKnob.setFillStyle(0xffffff, 1);
            }
        });

        if (this.pointerMoveVolHandler) {
            this.input.off('pointermove', this.pointerMoveVolHandler);
        }

        if (this.pointerUpVolHandler) {
            this.input.off('pointerup', this.pointerUpVolHandler);
        }

        this.pointerMoveVolHandler = (pointer) => {
            if (!this.arrastrandoVolumen) return;
            this.actualizarVolumenDesdePointer(pointer.x);
        };

        this.pointerUpVolHandler = () => {
            this.arrastrandoVolumen = false;
            if (this.sliderKnob) {
                this.sliderKnob.setFillStyle(0xffffff, 1);
            }
        };

        this.input.on('pointermove', this.pointerMoveVolHandler);
        this.input.on('pointerup', this.pointerUpVolHandler);
    }

    actualizarVolumenDesdePointer(pointerX) {
        const izquierda = this.sliderX - this.sliderWidth / 2;
        const derecha = this.sliderX + this.sliderWidth / 2;

        const xClamped = Phaser.Math.Clamp(pointerX, izquierda, derecha);
        const ratio = (xClamped - izquierda) / this.sliderWidth;

        this.volumenActual = Phaser.Math.Clamp(ratio, 0, 1);

        if (this.sonidoVentana) {
            this.sonidoVentana.setVolume(this.volumenActual);
        }

        this.sliderFill.displayWidth = Math.max(4, this.sliderWidth * this.volumenActual);
        this.sliderGlow.displayWidth = Math.max(4, this.sliderWidth * this.volumenActual);
        this.sliderKnob.x = izquierda + this.sliderWidth * this.volumenActual;
    }

    crearModalPersonalizado() {
        this.overlayModal = this.add.rectangle(640, 360, 1280, 720, 0x000000, 0.58);
        this.overlayModal.setDepth(100);
        this.overlayModal.setVisible(false);
        this.overlayModal.setAlpha(0);
        this.overlayModal.setInteractive();

        this.marcoExterior = this.add.rectangle(640, 360, 820, 510, 0x0b1630, 0.98);
        this.marcoExterior.setDepth(101);
        this.marcoExterior.setStrokeStyle(4, 0x89b4ff, 1);
        this.marcoExterior.setVisible(false);
        this.marcoExterior.setAlpha(0);

        this.barraTitulo = this.add.rectangle(640, 165, 780, 72, 0x17376d, 1);
        this.barraTitulo.setDepth(102);
        this.barraTitulo.setStrokeStyle(3, 0xa9c6ff, 1);
        this.barraTitulo.setVisible(false);
        this.barraTitulo.setAlpha(0);

        this.lineaDecorativa1 = this.add.rectangle(640, 215, 740, 3, 0x4f7fd1, 1);
        this.lineaDecorativa1.setDepth(102);
        this.lineaDecorativa1.setVisible(false);
        this.lineaDecorativa1.setAlpha(0);

        this.tituloModal = this.add.text(640, 165, '', {
            fontFamily: '"VT323", monospace',
            fontSize: '38px',
            color: '#ffffff',
            stroke: '#09111f',
            strokeThickness: 5,
            align: 'center'
        });
        this.tituloModal.setOrigin(0.5);
        this.tituloModal.setDepth(103);
        this.tituloModal.setVisible(false);
        this.tituloModal.setAlpha(0);

        this.cerrarModalBtn = this.add.image(640, 555, 'back');
        this.cerrarModalBtn.setDepth(103);
        this.cerrarModalBtn.setScale(0.22);
        this.cerrarModalBtn.setVisible(false);
        this.cerrarModalBtn.setAlpha(0);

        this.cerrarModalZone = this.add.zone(640, 555, 170, 55);
        this.cerrarModalZone.setDepth(104);
        this.cerrarModalZone.setVisible(false);

        this.cerrarModalZone.on('pointerover', () => {
            if (!this.modalAbierto) return;
            this.tweens.killTweensOf(this.cerrarModalBtn);
            this.tweens.add({
                targets: this.cerrarModalBtn,
                scale: 0.235,
                duration: 120
            });
        });

        this.cerrarModalZone.on('pointerout', () => {
            if (!this.modalAbierto) return;
            this.tweens.killTweensOf(this.cerrarModalBtn);
            this.tweens.add({
                targets: this.cerrarModalBtn,
                scale: 0.22,
                duration: 120
            });
        });

        this.cerrarModalZone.on('pointerdown', () => {
            if (!this.modalAbierto) return;
            this.reproducirClick();
            this.cerrarModal();
        });

        if (this.escHandler) {
            this.input.keyboard.off('keydown-ESC', this.escHandler);
        }

        this.escHandler = () => {
            if (this.modalAbierto) {
                this.cerrarModal();
            }
        };

        this.input.keyboard.on('keydown-ESC', this.escHandler);
    }

    abrirModalPrincipal(tipo) {
        if (this.modalAbierto) return;

        this.modalAbierto = true;
        this.desactivarInteractivosPrincipales();

        let titulo = '';

        if (tipo === 'buscar') titulo = 'Buscador de delitos';
        if (tipo === 'encontrados') titulo = 'Delitos encontrados';
        if (tipo === 'manual') titulo = 'Manual de delitos';

        this.tituloModal.setText(titulo);
        this.mostrarModal();

        if (tipo === 'buscar') {
            this.paginaBuscador = 0;
            this.time.delayedCall(180, () => this.mostrarContenidoBuscador());
        } else if (tipo === 'encontrados') {
            this.time.delayedCall(180, () => this.mostrarContenidoEncontrados(null));
        } else if (tipo === 'manual') {
            this.time.delayedCall(180, () => this.mostrarContenidoManual());
        }
    }

    abrirModalDia(numeroDia) {
        if (this.modalAbierto) return;

        this.modalAbierto = true;
        this.desactivarInteractivosPrincipales();

        this.tituloModal.setText(`Delitos encontrados — Día ${numeroDia}`);
        this.mostrarModal();
        this.time.delayedCall(180, () => this.mostrarContenidoEncontrados(numeroDia));
    }

    mostrarModal() {
        this.cerrarModalZone.setInteractive({ cursor: 'pointer' });

        this.overlayModal.setVisible(true);
        this.marcoExterior.setVisible(true);
        this.barraTitulo.setVisible(true);
        this.lineaDecorativa1.setVisible(true);
        this.tituloModal.setVisible(true);
        this.cerrarModalBtn.setVisible(true);
        this.cerrarModalZone.setVisible(true);

        const elementos = [
            this.overlayModal,
            this.marcoExterior,
            this.barraTitulo,
            this.lineaDecorativa1,
            this.tituloModal,
            this.cerrarModalBtn
        ];

        elementos.forEach(el => el.setAlpha(0));

        this.tweens.add({
            targets: elementos,
            alpha: 1,
            duration: 180
        });
    }

    cerrarModal() {
        this.limpiarContenidoModal();
        this.cerrarModalZone.disableInteractive();

        const elementos = [
            this.overlayModal,
            this.marcoExterior,
            this.barraTitulo,
            this.lineaDecorativa1,
            this.tituloModal,
            this.cerrarModalBtn
        ];

        this.tweens.add({
            targets: elementos,
            alpha: 0,
            duration: 160,
            onComplete: () => {
                this.overlayModal.setVisible(false);
                this.marcoExterior.setVisible(false);
                this.barraTitulo.setVisible(false);
                this.lineaDecorativa1.setVisible(false);
                this.tituloModal.setVisible(false);
                this.cerrarModalBtn.setVisible(false);
                this.cerrarModalZone.setVisible(false);

                this.modalAbierto = false;
                this.activarInteractivosPrincipales();
            }
        });
    }

    finalizarDia() {
        this.yaTransicionando = true;
        this.desactivarInteractivosPrincipales();

        if (this.cerrarModalZone) {
            this.cerrarModalZone.disableInteractive();
        }

        this.fadeOutMusica(() => {
            this.reproducirTransicionSalida(() => {
                if (this.diaActual < 6) {
                    this.scene.restart({
                        diaActual: this.diaActual + 1,
                        transicionEntrada: true,
                        volumenActual: this.volumenActual,
                        delitosEncontrados: this.delitosEncontrados
                    });
                } else {
                    this.scene.restart({
                        diaActual: 7,
                        modoSoloFondo: true,
                        transicionEntrada: true,
                        volumenActual: this.volumenActual,
                        delitosEncontrados: this.delitosEncontrados
                    });
                }
            });
        });
    }

    desactivarInteractivosPrincipales() {
        if (this.backZone) this.backZone.disableInteractive();
        if (this.hitboxBd) this.hitboxBd.disableInteractive();
        if (this.hitboxDenc) this.hitboxDenc.disableInteractive();
        if (this.hitboxMand) this.hitboxMand.disableInteractive();
        if (this.hitboxFind) this.hitboxFind.disableInteractive();

        if (this.hitboxDia1) this.hitboxDia1.disableInteractive();
        if (this.hitboxDia2) this.hitboxDia2.disableInteractive();
        if (this.hitboxDia3) this.hitboxDia3.disableInteractive();
        if (this.hitboxDia4) this.hitboxDia4.disableInteractive();
        if (this.hitboxDia5) this.hitboxDia5.disableInteractive();
        if (this.hitboxDia6) this.hitboxDia6.disableInteractive();
        if (this.hitboxDia7) this.hitboxDia7.disableInteractive();

        if (this.sliderZone) this.sliderZone.disableInteractive();
    }

    activarInteractivosPrincipales() {
        if (this.yaTransicionando) return;

        if (this.backZone) this.backZone.setInteractive({ cursor: 'pointer' });
        if (this.hitboxBd) this.hitboxBd.setInteractive({ cursor: 'pointer' });
        if (this.hitboxDenc) this.hitboxDenc.setInteractive({ cursor: 'pointer' });
        if (this.hitboxMand) this.hitboxMand.setInteractive({ cursor: 'pointer' });
        if (this.hitboxFind) this.hitboxFind.setInteractive({ cursor: 'pointer' });
        if (this.sliderZone) this.sliderZone.setInteractive({ cursor: 'pointer' });

        this.actualizarEstadoDias();
    }

    irAStart() {
        if (this.yaTransicionando) return;
        this.yaTransicionando = true;

        if (this.backZone) this.backZone.disableInteractive();
        if (this.sliderZone) this.sliderZone.disableInteractive();

        this.fadeOutMusica(() => {
            this.cameras.main.fadeOut(500, 0, 0, 0);

            this.time.delayedCall(500, () => {
                this.scene.start('Start');
            });
        });
    }

    detenerSonidos() {
        if (this.pointerMoveVolHandler) {
            this.input.off('pointermove', this.pointerMoveVolHandler);
        }

        if (this.pointerUpVolHandler) {
            this.input.off('pointerup', this.pointerUpVolHandler);
        }

        if (this.escHandler) {
            this.input.keyboard.off('keydown-ESC', this.escHandler);
        }

        if (this.sonidoVentana && this.sonidoVentana.isPlaying) {
            this.sonidoVentana.stop();
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  LIMPIEZA DE CONTENIDO MODAL
    // ─────────────────────────────────────────────────────────────────────────
    limpiarContenidoModal() {
        if (!this.elementosContenidoModal) return;
        this.elementosContenidoModal.forEach(el => {
            if (el && el.destroy) el.destroy();
        });
        this.elementosContenidoModal = [];
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  BUSCADOR DE DELITOS — 5 perfiles por página, 2 páginas
    // ─────────────────────────────────────────────────────────────────────────
    mostrarContenidoBuscador() {
        this.limpiarContenidoModal();

        const personajes = this.personajesDia;
        if (!personajes || personajes.length === 0) {
            const txt = this.add.text(640, 380, 'Sin datos para este día.', {
                fontFamily: '"VT323", monospace', fontSize: '24px', color: '#6a8aaa'
            });
            txt.setOrigin(0.5).setDepth(110);
            this.elementosContenidoModal.push(txt);
            return;
        }

        const inicio = this.paginaBuscador * 5;
        const paginaActual = personajes.slice(inicio, inicio + 5);

        // Indicador de página
        const indTxt = this.add.text(640, 232, `Página ${this.paginaBuscador + 1} / 2`, {
            fontFamily: '"VT323", monospace', fontSize: '18px', color: '#7a9acc'
        });
        indTxt.setOrigin(0.5).setDepth(110);
        this.elementosContenidoModal.push(indTxt);

        const sep0 = this.add.rectangle(640, 247, 760, 1, 0x2a4a7a, 0.6);
        sep0.setDepth(108);
        this.elementosContenidoModal.push(sep0);

        // Navegación
        if (this.paginaBuscador > 0) {
            this._crearBtnNav('< Anterior', 315, 232, () => {
                this.paginaBuscador--;
                this.mostrarContenidoBuscador();
            });
        }
        if (this.paginaBuscador < 1) {
            this._crearBtnNav('Siguiente >', 965, 232, () => {
                this.paginaBuscador++;
                this.mostrarContenidoBuscador();
            });
        }

        // Tarjetas — filas en y = 270, 326, 382, 438, 494
        const rowYs = [270, 326, 382, 438, 494];
        paginaActual.forEach((pj, i) => this._crearTarjetaBuscador(pj, rowYs[i]));
    }

    _crearBtnNav(texto, x, y, callback) {
        const bg = this.add.rectangle(x, y, 130, 24, 0x17376d, 1);
        bg.setDepth(110).setStrokeStyle(1, 0x6a9aee, 1);
        this.elementosContenidoModal.push(bg);

        const txt = this.add.text(x, y, texto, {
            fontFamily: '"VT323", monospace', fontSize: '16px', color: '#ccdeff'
        });
        txt.setOrigin(0.5).setDepth(111);
        this.elementosContenidoModal.push(txt);

        const zone = this.add.zone(x, y, 130, 24).setDepth(112).setInteractive({ cursor: 'pointer' });
        zone.on('pointerover', () => bg.setFillStyle(0x2a5aaa, 1));
        zone.on('pointerout',  () => bg.setFillStyle(0x17376d, 1));
        zone.on('pointerdown', () => { this.reproducirClick(); callback(); });
        this.elementosContenidoModal.push(zone);
    }

    _crearTarjetaBuscador(pj, rowY) {
        const decisionActual = this.decisiones[pj.rango] || null;
        const bloqueado      = decisionActual !== null;

        // Línea separadora superior
        const linea = this.add.rectangle(640, rowY - 26, 760, 1, 0x1e3860, 0.8);
        linea.setDepth(108);
        this.elementosContenidoModal.push(linea);

        // ---- Marco de foto ----
        const borderColor = bloqueado
            ? (decisionActual === 'delito' ? 0xaa4444 : 0x4444aa)
            : 0x5a8aee;
        const marco = this.add.rectangle(272, rowY, 54, 54, 0x0d1e3a, 1);
        marco.setDepth(108).setStrokeStyle(2, borderColor, 1);
        this.elementosContenidoModal.push(marco);

        // Foto o placeholder con inicial
        const fn  = pj.nombre.split(' ')[0].toLowerCase();
        const key = `pj_${fn}`;
        if (this.textures.exists(key)) {
            const foto = this.add.image(272, rowY, key).setDisplaySize(50, 50);
            foto.setDepth(109);
            if (bloqueado) foto.setAlpha(0.4);
            this.elementosContenidoModal.push(foto);
        } else {
            const placeholderBg = this.add.rectangle(272, rowY, 50, 50, 0x1a3560, 1);
            placeholderBg.setDepth(109);
            if (bloqueado) placeholderBg.setAlpha(0.4);
            this.elementosContenidoModal.push(placeholderBg);
            const inicialTxt = this.add.text(272, rowY, pj.nombre.charAt(0).toUpperCase(), {
                fontFamily: '"VT323", monospace', fontSize: '30px', color: '#7aaacf'
            });
            inicialTxt.setOrigin(0.5).setDepth(110);
            if (bloqueado) inicialTxt.setAlpha(0.4);
            this.elementosContenidoModal.push(inicialTxt);
        }

        const alphaTexto = bloqueado ? 0.38 : 1;

        // Nombre
        const nomTxt = this.add.text(308, rowY - 11, pj.nombre, {
            fontFamily: '"VT323", monospace', fontSize: '20px', color: '#ffffff'
        });
        nomTxt.setOrigin(0, 0.5).setDepth(109).setAlpha(alphaTexto);
        this.elementosContenidoModal.push(nomTxt);

        // Situación
        const caso = pj.textoCaso.length > 65 ? pj.textoCaso.substring(0, 65) + '…' : pj.textoCaso;
        const casoTxt = this.add.text(308, rowY + 9, caso, {
            fontFamily: '"VT323", monospace', fontSize: '14px', color: '#7a9abf'
        });
        casoTxt.setOrigin(0, 0.5).setDepth(109).setAlpha(alphaTexto);
        this.elementosContenidoModal.push(casoTxt);

        // ---- Botones ----
        const bgDel = this.add.rectangle(904, rowY, 86, 28, 0x163016, 1);
        bgDel.setDepth(109).setStrokeStyle(1, 0x3a7a3a, 1);
        this.elementosContenidoModal.push(bgDel);

        const txtDel = this.add.text(904, rowY, 'DELITO', {
            fontFamily: '"VT323", monospace', fontSize: '16px', color: '#66cc66'
        });
        txtDel.setOrigin(0.5).setDepth(110);
        this.elementosContenidoModal.push(txtDel);

        const bgLib = this.add.rectangle(998, rowY, 86, 28, 0x101630, 1);
        bgLib.setDepth(109).setStrokeStyle(1, 0x3a3a7a, 1);
        this.elementosContenidoModal.push(bgLib);

        const txtLib = this.add.text(998, rowY, 'LIBRE', {
            fontFamily: '"VT323", monospace', fontSize: '16px', color: '#6666cc'
        });
        txtLib.setOrigin(0.5).setDepth(110);
        this.elementosContenidoModal.push(txtLib);

        // Estado visual de botones
        const aplicarEstado = (dec) => {
            if (dec === 'delito') {
                bgDel.setFillStyle(0x2a7a2a, 1); txtDel.setColor('#aaffaa');
                bgLib.setFillStyle(0x080c14, 1); txtLib.setColor('#2a3a55');
            } else if (dec === 'libre') {
                bgDel.setFillStyle(0x081008, 1); txtDel.setColor('#2a4a2a');
                bgLib.setFillStyle(0x2a2a7a, 1); txtLib.setColor('#aaaaff');
            } else {
                bgDel.setFillStyle(0x163016, 1); txtDel.setColor('#66cc66');
                bgLib.setFillStyle(0x101630, 1); txtLib.setColor('#6666cc');
            }
        };
        aplicarEstado(decisionActual);

        // ---- Si ya está bloqueado: superponer veredicto y salir ----
        if (bloqueado) {
            const overlayBg = this.add.rectangle(620, rowY, 740, 52, 0x000000, 0.6);
            overlayBg.setDepth(113);
            this.elementosContenidoModal.push(overlayBg);

            const veredictColor = decisionActual === 'delito' ? '#ff8888' : '#8888ff';
            const veredictLabel = decisionActual === 'delito'
                ? '✓  MARCADO COMO DELITO'
                : '✓  MARCADO COMO LIBRE';
            const veredicto = this.add.text(620, rowY, veredictLabel, {
                fontFamily: '"VT323", monospace', fontSize: '19px', color: veredictColor
            });
            veredicto.setOrigin(0.5).setDepth(114);
            this.elementosContenidoModal.push(veredicto);
            return; // sin zonas interactivas
        }

        // ---- Zonas interactivas (solo si sin decisión previa) ----
        const zDel = this.add.zone(904, rowY, 86, 28).setDepth(112).setInteractive({ cursor: 'pointer' });
        zDel.on('pointerover', () => bgDel.setFillStyle(0x1e5a1e, 1));
        zDel.on('pointerout',  () => aplicarEstado(null));
        zDel.on('pointerdown', () => {
            this.reproducirClick();
            this.decisiones[pj.rango] = 'delito';
            if (!this.delitosEncontrados.find(d => d.rango === pj.rango)) {
                this.delitosEncontrados.push(pj);
            }
            this.time.delayedCall(50, () => this.mostrarContenidoBuscador());
        });
        this.elementosContenidoModal.push(zDel);

        const zLib = this.add.zone(998, rowY, 86, 28).setDepth(112).setInteractive({ cursor: 'pointer' });
        zLib.on('pointerover', () => bgLib.setFillStyle(0x1e1e5a, 1));
        zLib.on('pointerout',  () => aplicarEstado(null));
        zLib.on('pointerdown', () => {
            this.reproducirClick();
            this.decisiones[pj.rango] = 'libre';
            this.delitosEncontrados = this.delitosEncontrados.filter(d => d.rango !== pj.rango);
            this.time.delayedCall(50, () => this.mostrarContenidoBuscador());
        });
        this.elementosContenidoModal.push(zLib);
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  DELITOS ENCONTRADOS
    //  filtrarDia = número de día para filtrar, null = mostrar todos
    // ─────────────────────────────────────────────────────────────────────────
    mostrarContenidoEncontrados(filtrarDia) {
        this.limpiarContenidoModal();

        const lista = filtrarDia !== null && filtrarDia !== undefined
            ? this.delitosEncontrados.filter(pj => pj.dia === filtrarDia)
            : this.delitosEncontrados;

        if (lista.length === 0) {
            const txt = this.add.text(640, 380, 'Ningún delito registrado aún.', {
                fontFamily: '"VT323", monospace', fontSize: '24px', color: '#6a8aaa'
            });
            txt.setOrigin(0.5).setDepth(110);
            this.elementosContenidoModal.push(txt);
            return;
        }

        // Contador
        const n = lista.length;
        const contTxt = this.add.text(640, 234,
            `${n} delito${n !== 1 ? 's' : ''} registrado${n !== 1 ? 's' : ''}`, {
            fontFamily: '"VT323", monospace', fontSize: '18px', color: '#cc8888'
        });
        contTxt.setOrigin(0.5).setDepth(110);
        this.elementosContenidoModal.push(contTxt);

        const sep = this.add.rectangle(640, 247, 760, 1, 0x5a2a2a, 0.7);
        sep.setDepth(108);
        this.elementosContenidoModal.push(sep);

        const maxVisible = 4;
        const rowH   = 62;
        const startY = 272;

        lista.slice(0, maxVisible).forEach((pj, i) => {
            const rowY = startY + i * rowH;

            const linea = this.add.rectangle(640, rowY - 28, 760, 1, 0x3a1a1a, 0.6);
            linea.setDepth(108);
            this.elementosContenidoModal.push(linea);

            // Marco de foto (igual estilo que buscador, en rojo)
            const marco = this.add.rectangle(272, rowY, 54, 54, 0x2a0a0a, 1);
            marco.setDepth(108).setStrokeStyle(2, 0xaa4444, 1);
            this.elementosContenidoModal.push(marco);

            const fn  = pj.nombre.split(' ')[0].toLowerCase();
            const key = `pj_${fn}`;
            if (this.textures.exists(key)) {
                const foto = this.add.image(272, rowY, key).setDisplaySize(50, 50);
                foto.setDepth(109).setTint(0xffaaaa);
                this.elementosContenidoModal.push(foto);
            } else {
                const placeholderBg = this.add.rectangle(272, rowY, 50, 50, 0x3a1010, 1);
                placeholderBg.setDepth(109);
                this.elementosContenidoModal.push(placeholderBg);
                const inicialTxt = this.add.text(272, rowY, pj.nombre.charAt(0).toUpperCase(), {
                    fontFamily: '"VT323", monospace', fontSize: '30px', color: '#cf8a8a'
                });
                inicialTxt.setOrigin(0.5).setDepth(110);
                this.elementosContenidoModal.push(inicialTxt);
            }

            // Badge DELITO bajo la foto
            const badge = this.add.rectangle(272, rowY + 33, 54, 14, 0xaa2222, 1);
            badge.setDepth(110);
            this.elementosContenidoModal.push(badge);
            const badgeTxt = this.add.text(272, rowY + 33, 'DELITO', {
                fontFamily: '"VT323", monospace', fontSize: '11px', color: '#ffffff'
            });
            badgeTxt.setOrigin(0.5).setDepth(111);
            this.elementosContenidoModal.push(badgeTxt);

            // Nombre + día
            const nomTxt = this.add.text(308, rowY - 14, `${pj.nombre}  (Día ${pj.dia})`, {
                fontFamily: '"VT323", monospace', fontSize: '19px', color: '#ffbbbb'
            });
            nomTxt.setOrigin(0, 0.5).setDepth(109);
            this.elementosContenidoModal.push(nomTxt);

            // Situación (misma info que en el buscador)
            const caso = pj.textoCaso.length > 72 ? pj.textoCaso.substring(0, 72) + '…' : pj.textoCaso;
            const casoTxt = this.add.text(308, rowY + 1, caso, {
                fontFamily: '"VT323", monospace', fontSize: '13px', color: '#7a9abf'
            });
            casoTxt.setOrigin(0, 0.5).setDepth(109);
            this.elementosContenidoModal.push(casoTxt);

            // Cargo
            const cargoNombre = (pj.sancion && pj.sancion !== 'NO TIENE')
                ? pj.sancion.nombre
                : 'Pendiente';
            const sanTxt = this.add.text(308, rowY + 16, `Cargo: ${cargoNombre}`, {
                fontFamily: '"VT323", monospace', fontSize: '13px', color: '#cc7777'
            });
            sanTxt.setOrigin(0, 0.5).setDepth(109);
            this.elementosContenidoModal.push(sanTxt);
        });

        if (lista.length > maxVisible) {
            const masInfo = this.add.text(640, startY + maxVisible * rowH + 10,
                `... y ${lista.length - maxVisible} más`, {
                fontFamily: '"VT323", monospace', fontSize: '16px', color: '#6a8aaa'
            });
            masInfo.setOrigin(0.5).setDepth(110);
            this.elementosContenidoModal.push(masInfo);
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    //  MANUAL DE DELITOS — sanciones del día actual
    // ─────────────────────────────────────────────────────────────────────────
    mostrarContenidoManual() {
        this.limpiarContenidoModal();

        const sancionesDia = Sanciones[this.diaActual];
        if (!sancionesDia) {
            const txt = this.add.text(640, 380, 'Sin manual para este día.', {
                fontFamily: '"VT323", monospace', fontSize: '22px', color: '#6a8aaa'
            });
            txt.setOrigin(0.5).setDepth(110);
            this.elementosContenidoModal.push(txt);
            return;
        }

        let y = 242;
        sancionesDia.forEach((s, idx) => {
            if (y > 510) return;

            const tag    = idx === 0 ? '[Principal]' : '[Secundaria]';
            const tagCol = idx === 0 ? '#ffdd88'     : '#99bbdd';

            const tagTxt = this.add.text(262, y, tag, {
                fontFamily: '"VT323", monospace', fontSize: '15px', color: tagCol
            });
            tagTxt.setOrigin(0, 0.5).setDepth(110);
            this.elementosContenidoModal.push(tagTxt);
            y += 20;

            const nomTxt = this.add.text(262, y, s.nombre, {
                fontFamily: '"VT323", monospace', fontSize: '21px', color: '#ffffff'
            });
            nomTxt.setOrigin(0, 0.5).setDepth(110);
            this.elementosContenidoModal.push(nomTxt);
            y += 23;

            const descTxt = this.add.text(262, y, s.descripcion, {
                fontFamily: '"VT323", monospace', fontSize: '13px', color: '#8aaabb',
                wordWrap: { width: 720 }
            });
            descTxt.setOrigin(0, 0).setDepth(110);
            this.elementosContenidoModal.push(descTxt);
            y += descTxt.height + 16;
        });
    }

    // ─── Genera texturas procedurales para personajes sin PNG ───────────────
    _generarAvataresFaltantes() {
        const COLORES = [
            0x4a90d9, 0xe05c5c, 0x5cb85c, 0xf0ad4e, 0x9b59b6,
            0x1abc9c, 0xe67e22, 0x2980b9, 0xc0392b, 0x27ae60
        ];

        (Dias[this.diaActual] || []).forEach((pj, idx) => {
            const nombre = pj.nombre || '?';
            const fn     = nombre.toLowerCase().replace(/\s+/g, '_');
            const key    = `pj_${fn}`;

            if (this.textures.exists(key)) return; // ya cargado (PNG real)

            const SIZE   = 64;
            const rt     = this.add.renderTexture(0, 0, SIZE, SIZE);
            const g      = this.add.graphics();
            const color  = COLORES[idx % COLORES.length];

            // Fondo circular
            g.fillStyle(color, 1);
            g.fillCircle(SIZE / 2, SIZE / 2, SIZE / 2);
            rt.draw(g, 0, 0);
            g.destroy();

            // Inicial
            const inicial = nombre.charAt(0).toUpperCase();
            const txt = this.add.text(SIZE / 2, SIZE / 2, inicial, {
                fontFamily: 'Arial, sans-serif',
                fontSize: '28px',
                fontStyle: 'bold',
                color: '#ffffff'
            }).setOrigin(0.5, 0.5);
            rt.draw(txt, 0, 0);
            txt.destroy();

            // Guardar como textura reutilizable y limpiar el RenderTexture del display
            rt.saveTexture(key);
            rt.destroy();
        });
    }
}