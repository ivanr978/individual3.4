// Definición del módulo Proveedor.js

// Clase Proveedor que representa un proveedor básico
export class Proveedor {
    constructor(nombre, articulo, precio) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.precio = precio;
    }

    // Método para obtener información básica del proveedor
    getInfoProveedor() {
        return `Proveedor: ${this.nombre}`;
    }
}