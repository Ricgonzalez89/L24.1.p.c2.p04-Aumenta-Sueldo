export class Cl_vEmpleado {
    constructor(controlador) {
        this.vista = document.getElementById("empleadoForm");
        this.inCedula = document.getElementById("empleadoForm_inCedula");
        this.inSueldo = document.getElementById("empleadoForm_inSueldo");
        this.inTipo = document.getElementById("empleadoForm_inTipo");
        this.btAceptar = document.getElementById("empleadoForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarEmpleado({
                cedula: this.inCedula.value,
                sueldo: this.inSueldo.value,
                tipo: this.inTipo.value
            });
        this.ocultar();
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }
}