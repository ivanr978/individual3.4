// Definición del módulo TipoProveedor.js

// Importar la clase Proveedor
import { Proveedor } from './Proveedor.js';

// Clase extendida de Proveedor para representar un tipo específico de proveedor
export class TipoProveedor extends Proveedor {
    constructor(nombre, articulo, precio, pais, tipo) {
        super(nombre, articulo, precio);
        this.pais = pais;
        this.tipo = tipo;
    }

    // Sobrescribe el método para incluir el país y tipo
    getInfoProveedor() {
        const tipoInfo = this.tipo === 'internacional' ? 'Internacional' : 'Nacional';
        return `Proveedor: ${this.nombre}, País: ${this.pais}, Tipo: ${tipoInfo}`;
    }
}