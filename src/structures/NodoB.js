import { ContenidoSancion } from './ContenidoSancion.js';

export class NodoB {
    constructor(orden, nombre = '', delito = false, textoCaso = '', rango = 0, dia = 0, sancion = null) {
        this.orden = orden;
        this.claves = [];
        this.hijos = [];
        this.esHoja = true;

        this._nombre = nombre;
        this._delito = delito;
        this._textoCaso = textoCaso;
        this._rango = rango;
        this._dia = dia;
        this._sancion = sancion instanceof ContenidoSancion ? sancion : null;
    }

    get nombre() { return this._nombre; }
    get delito() { return this._delito; }
    get textoCaso() { return this._textoCaso; }
    get rango() { return this._rango; }
    get dia() { return this._dia; }
    get sancion() {
        return this._sancion !== null ? this._sancion : 'NO TIENE';
    }
}