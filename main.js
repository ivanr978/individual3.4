// Archivo principal main.js

// Importar las clases necesarias y la función de validación
import { TipoProveedor } from './assets/js/TipoProveedor.js';
import { validarFormulario } from './assets/js/validaciones.js';

// Array para almacenar los proveedores
const proveedores = [];

// Obtener referencias a elementos del DOM
const proveedorForm = document.getElementById('proveedorForm');
const proveedoresTableBody = document.getElementById('proveedoresTable').querySelector('tbody');

// Función para calcular el impuesto (asumimos un 10% del precio)
const calcularImpuesto = (proveedor) => {
    return proveedor.precio * 0.10;
};

// Manejador del evento submit del formulario
proveedorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = event.target.nombre.value.trim();
    const articulo = event.target.articulo.value.trim();
    const precio = parseFloat(event.target.precio.value);
    const pais = event.target.pais.value.trim();
    const tipo = event.target.tipo.value;

    // Validar los datos del formulario
    const { esValido, errores } = validarFormulario(nombre, articulo, precio, pais, tipo);

    if (esValido) {
        // Crear un nuevo objeto TipoProveedor
        const nuevoProveedor = new TipoProveedor(nombre, articulo, precio, pais, tipo);
        proveedores.push(nuevoProveedor);

        // Limpiar el formulario
        event.target.reset();

        // Actualizar la tabla
        actualizarTabla();
    } else {
        // Mostrar mensajes de error
        alert(`Errores de validación:\n${errores.join('\n')}`);
    }
});

// Función para actualizar la tabla con la lista de proveedores
const actualizarTabla = () => {
    // Limpiar el contenido actual de la tabla
    proveedoresTableBody.innerHTML = '';

    // Recorrer el array de proveedores y agregar filas a la tabla
    proveedores.forEach((proveedor) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${proveedor.nombre}</td>
            <td>${proveedor.articulo}</td>
            <td>${proveedor.precio.toFixed(2)}</td>
            <td>${proveedor.getInfoProveedor()}</td>
        `;

        proveedoresTableBody.appendChild(row);
    });
};

// Inicializar la tabla al cargar la página
actualizarTabla();