function generarTabla(datos) {
    // Crear la tabla
    const tabla = document.createElement("table");
    
    // Crear el encabezado de la tabla
    const encabezado = document.createElement("tr");
    Object.keys(datos[0]).forEach(key => {
        const th = document.createElement("th");
        const texto = document.createTextNode(key);
        th.appendChild(texto);
        encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);
    
    // Crear las filas de la tabla
    datos.forEach(dato => {
        const fila = document.createElement("tr");
        Object.values(dato).forEach(value => {
            const td = document.createElement("td");
            const texto = document.createTextNode(value);
            td.appendChild(texto);
            fila.appendChild(td);
        });
        tabla.appendChild(fila);
    });
    
    // Adjuntar la tabla al cuerpo de la página
    document.body.appendChild(tabla);
}

// Ejemplo de uso
const datos = [
    { nombre: "Juan", edad: 30, ciudad: "Buenos Aires" },
    { nombre: "María", edad: 25, ciudad: "Córdoba" },
    { nombre: "Pedro", edad: 35, ciudad: "Rosario" }
];
generarTabla(datos);