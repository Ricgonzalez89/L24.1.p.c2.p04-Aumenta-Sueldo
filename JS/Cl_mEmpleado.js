export class Cl_mEmpleado {
    constructor({ cedula, sueldo, tipo }) {
        this.cedula = cedula;
        this.sueldo = +sueldo;
        this.tipo = +tipo;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    set sueldo(sueldo) {
        this._sueldo = +sueldo;
    }

    set tipo(tipo) {
        this._tipo = +tipo;
    }

    get cedula() {
        return this._cedula;
    }

    get sueldo() {
        return this._sueldo;
    }

    get tipo() {
        return this._tipo;
    }

    calcAumento() {
        if (this.tipo === 1) {
            return this.sueldo * 0.20;
        } else if (this.tipo === 2) {
            return this.sueldo * 0.10;
        } else {
            return 0;
        }
    }

    calcSueldoNue() {
        return this.sueldo + this.calcAumento();
    }
}