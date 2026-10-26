// Autor: Litzy Yudany Argueta Manzanares
// Carnet: U20261506
// Laboratorio 4: Sistema de Reservaciones de Restaurante

// 1. Estructura e Interfaz
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string;
}

// Arreglo tipado con cuatro reservaciones iniciales
let reservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos Pérez", personas: 6, zona: "Terraza" },    // Terraza >= 5 (permanecerá pendiente)
    { id: 2, cliente: "Sofía Gómez", personas: 2, zona: "Interior" },
    { id: 3, cliente: "Mario Martínez", personas: 5, zona: "Terraza" },   // Terraza >= 5
    { id: 4, cliente: "Ana López", personas: 3, zona: "Interior" }
];

console.log("=== 1. ESTADO INICIAL Y REGISTRO DE RESERVACIONES ===");

// 2. Registra nuevas reservaciones
// Agrega una reservación normal al final
reservaciones.push({ id: 5, cliente: "Roberto Díaz", personas: 2, zona: "Interior" });

// Incorpora una prioritaria al inicio
reservaciones.unshift({ id: 0, cliente: "Lucía Rivas", personas: 4, zona: "Terraza" });

// Muestra la lista antes de atender para comprobar su orden
console.log("Lista completa antes de atender:");
console.log(reservaciones);

// 3. Atiende una reservación
console.log("\n=== 2. ATENCIÓN DE RESERVACIÓN ===");

const atendida = reservaciones.shift();

if (atendida) {
    console.log(`Cliente atendido: ${atendida.cliente} | Cantidad de personas: ${atendida.personas}`);
} else {
    console.log("La lista de reservaciones está vacía.");
}

// 4. Busca y consulta
console.log("\n=== 3. BÚSQUEDA Y CONSULTA ===");

// Búsqueda por identificador (Caso existente)
const idBuscado = 3;
const resultadoBusqueda = reservaciones.find(r => r.id === idBuscado);
if (resultadoBusqueda) {
    console.log(`Búsqueda exitosa (ID ${idBuscado}):`, resultadoBusqueda);
} else {
    console.log(`No se encontró ninguna reservación con el ID ${idBuscado}.`);
}

// Búsqueda por identificador (Caso inexistente)
const idInexistente = 99;
const resultadoInexistente = reservaciones.find(r => r.id === idInexistente);
if (resultadoInexistente) {
    console.log(`Búsqueda exitosa (ID ${idInexistente}):`, resultadoInexistente);
} else {
    console.log(`No se encontró ninguna reservación con el ID ${idInexistente}. (Comprobado caso inexistente)`);
}

// Filtro: Zona "Terraza" y personas >= 5
const filtradasTerraza = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
console.log("Reservaciones en Terraza con 5 o más personas:");
console.log(filtradasTerraza);

if (filtradasTerraza.length === 0) {
    console.log("No se encontraron coincidencias para la búsqueda filtrada.");
}

// 5. Integra una función tipada
console.log("\n=== 4. FUNCIÓN TIPADA ===");

// Función que busca reservaciones grandes en una zona específica
function consultarReservacionesGrandes(lista: Reservacion[], zonaObjetivo: string): Reservacion[] {
    return lista.filter(r => r.zona === zonaObjetivo && r.personas >= 5);
}

// Primera ejecución con el arreglo actual
console.log("Ejecución 1 (Arreglo actual - Terraza):");
const resultadoFuncion1 = consultarReservacionesGrandes(reservaciones, "Terraza");
console.log(resultadoFuncion1);

// Segunda ejecución con un arreglo vacío de prueba
console.log("Ejecución 2 (Arreglo vacío de prueba):");
const arregloVacio: Reservacion[] = [];
const resultadoFuncion2 = consultarReservacionesGrandes(arregloVacio, "Terraza");
if (resultadoFuncion2.length === 0) {
    console.log("No se encontraron coincidencias en el arreglo de prueba vacío.");
}

// 6. Comprueba el estado final
console.log("\n=== 5. VERIFICACIÓN FINAL ===");

console.log(`Cantidad de reservaciones pendientes actuales: ${reservaciones.length}`);
console.log(`Cantidad de coincidencias producidas por el filtro: ${filtradasTerraza.length}`);

// Comparación del tamaño del arreglo original antes y después de filtrar
const tamanoAntes = reservaciones.length;
const pruebaFiltro = reservaciones.filter(r => r.zona === "Terraza" && r.personas >= 5);
const tamanoDespues = reservaciones.length;

console.log(`Tamaño antes de filtrar: ${tamanoAntes} | Tamaño después de filtrar: ${tamanoDespues}`);
console.log("Comprobación exitosa: El método filter no elimina ni altera registros del arreglo original.");