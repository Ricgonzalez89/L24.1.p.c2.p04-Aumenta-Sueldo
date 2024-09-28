/* 2. - AUMENTA SUELDO
|* En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al personal 
|* administrativo. Se conoce de cada empleado su cédula, sueldo actual y el tipo de empleado 
|* (1-Obrero, 2-Administrativo). Al procesar todos los empleados, la empresa desea saber: 
|* 
|* a) el nuevo sueldo de cada empleado, por la empresa: 
|* b) el monto total que deberá pagar sólo por concepto de incremento de sueldo a todo el personal y 
|* c) el porcentaje de personal obrero.
|* 
|* La empresa entrega la siguiente información como referencia del reporte de salida requerido: 
|* 
|* La cédula 555 tiene nuevo sueldo de $220
|* La cédula 888 tiene nuevo sueldo de $600
|* La cédula 777 tiene nuevo sueldo de $440
|* La cédula 666 tiene nuevo sueldo de $720
|* La cédula 444 tiene nuevo sueldo de $960
|* Total a pagar sólo por aumento de sueldo: $440
|* Porcentaje de personal obrero: 60%
|* 
|* Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, 
|* el 888 es obrero con sueldo actual de 500, el 777 administrativo con 400, el 666 
|* es obrero con sueldo actual de 600, y el 444 es obrero con 800 
*/
import { Cl_mEmpleado } from "./Cl_mEmpleado.js";
import { Cl_mEmpresa } from "./Cl_mEmpresa.js";
import { Cl_vEmpleado } from "./Cl_vEmpleado.js";
import { Cl_vEmpresa } from "./Cl_vEmpresa.js";

export class Cl_controlador {
    constructor() {
        this.mEmpresa = new Cl_mEmpresa();
        this.vEmpleado = new Cl_vEmpleado(this);
        this.vEmpresa = new Cl_vEmpresa(this);
    }

    mostrarVistaEmpleado() {
        this.vEmpleado.mostrar();
        this.vEmpresa.ocultar();
    }

    mostrarVistaEmpresa() {
        this.vEmpleado.ocultar();
        this.vEmpresa.mostrar();
    }

    agregarEmpleado({ cedula, sueldo, tipo }) {
        let empleado = new Cl_mEmpleado({ cedula, sueldo, tipo });
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportarEmpleado({
            cedula: empleado.cedula,
            sueldoActual: empleado.sueldo,
            tipo: empleado.tipo,
            nuevoSueldo: empleado.calcSueldoNue(),
            totalAumento: this.mEmpresa.devolverAumentoTotal(),
            porcObrero: this.mEmpresa.calcPorcObrero()
        });
        this.mostrarVistaEmpresa();
    }
}