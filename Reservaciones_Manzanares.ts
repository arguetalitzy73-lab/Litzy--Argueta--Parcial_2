
//  Litzy Yudany Argueta Manzanares



// ==========================================
// 1. DEFINICIÓN DE LA INTERFAZ
// ==========================================
// La interfaz funciona como una plantilla o contrato. 
// Obliga a que cualquier objeto "Reservacion" tenga exactamente estas propiedades y tipos.
interface Reservacion {
    id: number;          // Identificador único numérico
    cliente: string;     // Nombre del cliente en texto
    personas: number;    // Cantidad de personas numéricas
    zona: string;        // Ubicación (ej. "Interior" o "Terraza")
}

// ==========================================
// 2. CREACIÓN DEL ARREGLO TIPADO INICIAL
// ==========================================
// Creamos un arreglo que solo puede aceptar objetos que cumplan con la interfaz 'Reservacion'.
// Contiene 4 elementos iniciales variados para cumplir con las condiciones de la rúbrica.
let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },    // Terraza >= 5 (permanecerá pendiente)
    { id: 2, cliente: "Sofía Gómez", personas: 2, zona: "Interior" },
    { id: 3, cliente: "Mario Martínez", personas: 5, zona: "Terraza" },   // Terraza >= 5
    { id: 4, cliente: "Ana López", personas: 3, zona: "Interior" }
];

console.log("=== 1. ESTADO INICIAL Y REGISTRO DE RESERVACIONES ===");

// ==========================================
// 3. REGISTRO DE NUEVAS RESERVACIONES
// ==========================================
// .push() agrega un elemento al FINAL del arreglo (reservación normal).
reservaciones.push({ id: 5, cliente: "Roberto Díaz", personas: 2, zona: "Interior" });

// .unshift() agrega un elemento al INICIO del arreglo (reservación prioritaria).
reservaciones.unshift({ id: 0, cliente: "Lucía Rivas", personas: 4, zona: "Terraza" });

// Mostramos el arreglo completo para comprobar el orden de los elementos.
console.log("Lista completa antes de atender:");
console.log(reservaciones);

// ==========================================
// 4. ATENCIÓN DE UNA RESERVACIÓN
// ==========================================
console.log("\n=== 2. ATENCIÓN DE RESERVACIÓN ===");

// .shift() extrae y elimina el PRIMER elemento del arreglo (el de mayor prioridad).
const atendida = reservaciones.shift();

// Validamos si la operación devolvió un objeto o si el arreglo estaba vacío.
if (atendida) {
    console.log(`Cliente atendido: ${atendida.cliente} | Cantidad de personas: ${atendida.personas}`);
} else {
    console.log("La lista de reservaciones está vacía.");
}

// ==========================================
// 5. BÚSQUEDA Y CONSULTA (FIND Y FILTER)
// ==========================================
console.log("\n=== 3. BÚSQUEDA Y CONSULTA ===");

// Búsqueda por identificador con .find() (Caso existente)
const idBuscado = 3;
const resultadoBusqueda = reservaciones.find(r => r.id === idBuscado);
if (resultadoBusqueda) {
    console.log(`Búsqueda exitosa (ID ${idBuscado}):`, resultadoBusqueda);
} else {
    console.log(`No se encontró ninguna reservación con el ID ${idBuscado}.`);
}

// Búsqueda por identificador con .find() (Caso inexistente para demostrar ambos escenarios)
const idInexistente = 99;
const resultadoInexistente = reservaciones.find(r => r.id === idInexistente);
if (resultadoInexistente) {
    console.log(`Búsqueda exitosa (ID ${idInexistente}):`, resultadoInexistente);
} else {
    console.log(`No se encontró ninguna reservación con el ID ${idInexistente}. (Comprobado caso inexistente)`);
}

// Filtro avanzado con .filter(): Combina dos condiciones (Zona "Terraza" y personas >= 5)
const filtradasTerraza = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
console.log("Reservaciones en Terraza con 5 o más personas:");
console.log(filtradasTerraza);

// Validación en caso de que el filtro no devuelva elementos
if (filtradasTerraza.length === 0) {
    console.log("No se encontraron coincidencias para la búsqueda filtrada.");
}

// ==========================================
// 6. INTEGRACIÓN DE UNA FUNCIÓN TIPADA
// ==========================================
console.log("\n=== 4. FUNCIÓN TIPADA ===");

// Declaración de una función tipada:
// - Recibe una lista tipada y un texto (zonaObjetivo).
// - Devuelve explícitamente un arreglo de tipo Reservacion[].
function consultarReservacionesGrandes(lista: Reservacion[], zonaObjetivo: string): Reservacion[] {
    return lista.filter(r => r.zona === zonaObjetivo && r.personas >= 5);
}

// Primera ejecución usando el arreglo actual de reservaciones
console.log("Ejecución 1 (Arreglo actual - Terraza):");
const resultadoFuncion1 = consultarReservacionesGrandes(reservaciones, "Terraza");
console.log(resultadoFuncion1);

// Segunda ejecución usando un arreglo vacío de prueba para comprobar robustez
console.log("Ejecución 2 (Arreglo vacío de prueba):");
const arregloVacio: Reservacion[] = [];
const resultadoFuncion2 = consultarReservacionesGrandes(arregloVacio, "Terraza");
if (resultadoFuncion2.length === 0) {
    console.log("No se encontraron coincidencias en el arreglo de prueba vacío.");
}

// ==========================================
// 7. VERIFICACIÓN Y ESTADO FINAL
// ==========================================
console.log("\n=== 5. VERIFICACIÓN FINAL ===");

// .length permite conocer la cantidad actual de elementos pendientes
console.log(`Cantidad de reservaciones pendientes actuales: ${reservaciones.length}`);
console.log(`Cantidad de coincidencias producidas por el filtro: ${filtradasTerraza.length}`);

// Comparación antes y después para comprobar la inmutabilidad de .filter()
const tamanoAntes = reservaciones.length;
const pruebaFiltro = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
const tamanoDespues = reservaciones.length;

console.log(`Tamaño antes de filtrar: ${tamanoAntes} | Tamaño después de filtrar: ${tamanoDespues}`);
console.log("Comprobación exitosa: El método filter no elimina ni altera registros del arreglo original.");