// Definición del módulo Articulo.js

// Clase Artículo que representa un artículo y su proveedor
export class Articulo {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    // Método para obtener información del proveedor
    getInfoProveedor() {
        return `Proveedor: ${this.nombre}, Teléfono: ${this.telefono}`;
    }
}