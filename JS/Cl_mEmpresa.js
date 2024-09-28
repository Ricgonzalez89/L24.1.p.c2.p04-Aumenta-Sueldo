export class Cl_mEmpresa {
    constructor() {
        this.acAumento = 0;
        this.cntObrero = 0;
        this.cntEmpleado = 0;
    }

    procesarEmpleado(e) {
        this.acAumento += e.calcAumento();
        if (e.tipo === 1) {
            this.cntObrero++;
        }
        this.cntEmpleado++;
    }

    devolverAumentoTotal() {
        return this.acAumento;
    }

    calcPorcObrero() {
        if (this.cntEmpleado > 0) {
            return (this.cntObrero / this.cntEmpleado) * 100;
        } else {
            return 0;
        }
    }
}