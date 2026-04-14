export class PuntajeDia extends Phaser.Scene {
    constructor() {
        super('PuntajeDia');
    }

    preload() {
        if (!this.cache.audio.exists('rings')) {
            this.load.audio('rings', 'music/rings.mp3');
        }
    }

    init(data) {
        data = data || {};

        this.puntajeDia = data.puntajeDia || {
            dia: 1,
            clasificacionesCorrectas: 0,
            puntosClasificacion: 0,
            sancionesCorrectas: 0,
            puntosSanciones: 0,
            totalBruto: 0,
            penalizacion: 0,
            vidasRestantes: 4,
            total: 0
        };

        this.siguienteEstado = data.siguienteEstado || {};
        this.yaTransicionando = false;
        this.sonidoRings = null;
    }

    create() {
        this.cameras.main.setBackgroundColor('#000000');
        this.cameras.main.fadeIn(450, 0, 0, 0);

        this.add.rectangle(640, 360, 1280, 720, 0x000000, 1);

        this.titulo = this.add.text(640, 96, `Puntaje del Día ${this.puntajeDia.dia}`, {
            fontFamily: '"VT323", monospace',
            fontSize: '60px',
            color: '#ffffff',
            stroke: '#111111',
            strokeThickness: 5
        }).setOrigin(0.5).setAlpha(0);

        this.subtitulo = this.add.text(640, 146, 'Recopilando resultados...', {
            fontFamily: '"VT323", monospace',
            fontSize: '28px',
            color: '#d8d8d8'
        }).setOrigin(0.5).setAlpha(0);

        this.linea = this.add.rectangle(640, 182, 760, 2, 0xffffff, 0.75);
        this.linea.setAlpha(0);

        this.panel = this.add.rectangle(640, 390, 780, 360, 0x0b0b0b, 0.95);
        this.panel.setStrokeStyle(2, 0xffffff, 0.35);
        this.panel.setAlpha(0);

        this.txtClasifLabel = this.add.text(330, 250, 'Clasificaciones correctas:', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0, 0.5).setAlpha(0);

        this.txtClasifValor = this.add.text(950, 250, '0', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(1, 0.5).setAlpha(0);

        this.txtClasifPts = this.add.text(950, 286, '+0 pts', {
            fontFamily: '"VT323", monospace',
            fontSize: '28px',
            color: '#d6ffd6'
        }).setOrigin(1, 0.5).setAlpha(0);

        this.txtSancionLabel = this.add.text(330, 346, 'Sanciones correctas:', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0, 0.5).setAlpha(0);

        this.txtSancionValor = this.add.text(950, 346, '0', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(1, 0.5).setAlpha(0);

        this.txtSancionPts = this.add.text(950, 382, '+0 pts', {
            fontFamily: '"VT323", monospace',
            fontSize: '28px',
            color: '#d6ffd6'
        }).setOrigin(1, 0.5).setAlpha(0);

        this.txtPenalizacionLabel = this.add.text(330, 442, 'Penalización por errores:', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0, 0.5).setAlpha(0);

        this.txtPenalizacionValor = this.add.text(950, 442, '0', {
            fontFamily: '"VT323", monospace',
            fontSize: '32px',
            color: '#ffb2b2'
        }).setOrigin(1, 0.5).setAlpha(0);

        this.txtVidas = this.add.text(640, 500, `Vidas restantes: ${this.puntajeDia.vidasRestantes}`, {
            fontFamily: '"VT323", monospace',
            fontSize: '28px',
            color: '#d7e8ff'
        }).setOrigin(0.5).setAlpha(0);

        this.lineaTotal = this.add.rectangle(640, 548, 680, 2, 0xffffff, 0.45);
        this.lineaTotal.setAlpha(0);

        this.txtTotalLabel = this.add.text(640, 592, 'TOTAL DEL DÍA', {
            fontFamily: '"VT323", monospace',
            fontSize: '36px',
            color: '#ffffff'
        }).setOrigin(0.5).setAlpha(0);

        this.txtTotalValor = this.add.text(640, 650, '0', {
            fontFamily: '"VT323", monospace',
            fontSize: '72px',
            color: '#ffffff',
            stroke: '#111111',
            strokeThickness: 6
        }).setOrigin(0.5).setAlpha(0).setScale(0.9);

        this.txtContinuar = this.add.text(640, 698, 'Continuando...', {
            fontFamily: '"VT323", monospace',
            fontSize: '24px',
            color: '#bbbbbb'
        }).setOrigin(0.5).setAlpha(0);

        this.tweens.add({
            targets: [
                this.titulo,
                this.subtitulo,
                this.linea,
                this.panel,
                this.txtClasifLabel,
                this.txtClasifValor,
                this.txtClasifPts,
                this.txtSancionLabel,
                this.txtSancionValor,
                this.txtSancionPts,
                this.txtPenalizacionLabel,
                this.txtPenalizacionValor,
                this.txtVidas,
                this.lineaTotal,
                this.txtTotalLabel,
                this.txtTotalValor
            ],
            alpha: 1,
            duration: 350,
            ease: 'Sine.easeOut'
        });

        this.time.delayedCall(350, () => {
            this._iniciarSonidoConteo();
            this._animarPuntajes();
        });

        this.time.delayedCall(3400, () => {
            if (this.txtContinuar) {
                this.tweens.add({
                    targets: this.txtContinuar,
                    alpha: 1,
                    duration: 250
                });
            }
        });

        this.time.delayedCall(4300, () => {
            this.irASiguienteEscena();
        });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.irASiguienteEscena();
        });

        this.input.once('pointerdown', () => {
            this.irASiguienteEscena();
        });

        this.events.on('shutdown', this._detenerSonidoConteo, this);
        this.events.on('destroy', this._detenerSonidoConteo, this);
    }

    _iniciarSonidoConteo() {
        if (!this.cache.audio.exists('rings')) return;

        this.sonidoRings = this.sound.add('rings', {
            volume: 0.45,
            loop: true
        });

        if (!this.sonidoRings.isPlaying) {
            this.sonidoRings.play();
        }

        this.time.delayedCall(2100, () => {
            this._detenerSonidoConteo();
        });
    }

    _detenerSonidoConteo() {
        if (this.sonidoRings && this.sonidoRings.isPlaying) {
            this.sonidoRings.stop();
        }
        this.sonidoRings = null;
    }

    _animarPuntajes() {
        const datos = this.puntajeDia;

        this.tweens.addCounter({
            from: 0,
            to: datos.clasificacionesCorrectas,
            duration: 650,
            ease: 'Sine.easeOut',
            onUpdate: (tween) => {
                const value = Math.floor(tween.getValue());
                this.txtClasifValor.setText(`${value}`);
                this.txtClasifPts.setText(`+${value * 10} pts`);
            }
        });

        this.time.delayedCall(260, () => {
            this.tweens.addCounter({
                from: 0,
                to: datos.sancionesCorrectas,
                duration: 650,
                ease: 'Sine.easeOut',
                onUpdate: (tween) => {
                    const value = Math.floor(tween.getValue());
                    this.txtSancionValor.setText(`${value}`);
                    this.txtSancionPts.setText(`+${value * 10} pts`);
                }
            });
        });

        this.time.delayedCall(620, () => {
            this.tweens.addCounter({
                from: 0,
                to: datos.penalizacion,
                duration: 500,
                ease: 'Sine.easeOut',
                onUpdate: (tween) => {
                    const value = Math.floor(tween.getValue());
                    this.txtPenalizacionValor.setText(`-${value} pts`);
                }
            });
        });

        this.time.delayedCall(980, () => {
            this.tweens.addCounter({
                from: 0,
                to: datos.total,
                duration: 950,
                ease: 'Quad.easeOut',
                onUpdate: (tween) => {
                    const value = Math.floor(tween.getValue());
                    this.txtTotalValor.setText(`${value} pts`);
                }
            });

            this.tweens.add({
                targets: this.txtTotalValor,
                scale: 1.06,
                duration: 220,
                yoyo: true,
                ease: 'Sine.easeInOut'
            });
        });
    }

    irASiguienteEscena() {
        if (this.yaTransicionando) return;
        this.yaTransicionando = true;

        this._detenerSonidoConteo();

        this.cameras.main.fadeOut(420, 0, 0, 0);

        this.time.delayedCall(420, () => {
            this.scene.start('Ventana1', this.siguienteEstado);
        });
    }
}