// Función para validar el formulario
export const validarFormulario = (nombre, articulo, precio, pais, tipo) => {
    const errores = [];

    // Validar que el nombre no esté vacío
    if (!nombre || nombre.trim() === '') {
        errores.push('El nombre del proveedor no puede estar vacío.');
    }

    // Validar que el artículo no esté vacío
    if (!articulo || articulo.trim() === '') {
        errores.push('El nombre del artículo no puede estar vacío.');
    }

    // Validar que el precio sea un número positivo
    if (isNaN(precio) || precio <= 0) {
        errores.push('El precio debe ser un número mayor a cero.');
    }

    // Validar que el país no esté vacío
    if (!pais || pais.trim() === '') {
        errores.push('El país del proveedor no puede estar vacío.');
    }

    // Validar que el tipo de proveedor sea válido
    if (!['nacional', 'internacional'].includes(tipo)) {
        errores.push('El tipo de proveedor debe ser nacional o internacional.');
    }

    // Retornar un objeto con el estado de validez y los mensajes de error
    return {
        esValido: errores.length === 0,
        errores: errores
    };
};