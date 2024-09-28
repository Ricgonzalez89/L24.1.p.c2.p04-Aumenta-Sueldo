export class Cl_vEmpresa {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.lblTotalAumento = document.getElementById("mainForm_lblTotalAumento");
        this.lblPorcentajeObrero = document.getElementById("mainForm_lblPorcentajeObrero");
        this.btAgregar = document.getElementById("mainForm_btAgregarEmpleado");
        this.btAgregar.onclick = () => controlador.mostrarVistaEmpleado();
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }

    reportarEmpleado({
        cedula,
        sueldoActual,
        tipo,
        nuevoSueldo,
        totalAumento,
        porcObrero
    }) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>${sueldoActual}</td>
            <td>${tipo}</td>
            <td>${nuevoSueldo}</td>
        </tr>`;
        this.lblTotalAumento.innerHTML = totalAumento;
        this.lblPorcentajeObrero.innerHTML = porcObrero;
    }
}