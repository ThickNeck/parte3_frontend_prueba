/* En este archivo entrará el endpoint LISTAR POKEMONES y FILTRAR POKEMONES */
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
    // --- 1. CONFIGURACIÓN DE PAGINACIÓN ---
    // Obtener el número de página de la URL (ej: ?page=1). Por defecto, es 0.
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 20; // Tamaño de la página (límite de resultados)
    const offset = page * pageSize; // Desplazamiento (offset)

    // --- 2. CONSTRUCCIÓN DE LA URL BASE ---
    // Usamos la URL de tu API de Pokémon.
    // Usaremos un objeto URL para manipular la base fácilmente.
    let apiUrl = new URL("http://127.0.0.1:8000/api/pokemon");
    
    // Añadir los parámetros de paginación (limit y offset)
    apiUrl.searchParams.set("limit", pageSize.toString());
    apiUrl.searchParams.set("offset", offset.toString());

    // --- 3. IMPLEMENTACIÓN DE FILTRADO (Opcional, pero recomendado) ---
    // Aquí puedes añadir lógica para pasar parámetros de filtrado a tu API.
    // Por ejemplo, si tienes un parámetro 'search' en la URL (ej: ?search=pikachu):
    const searchTerm = url.searchParams.get("search");
    if (searchTerm) {
        apiUrl.searchParams.set("search", searchTerm);
    }
    // Agrega aquí cualquier otro filtro necesario (tipo, generación, etc.)

    // --- 4. FETCH DE LA API ---
    const response = await fetch(apiUrl);

    if (!response.ok) {
        // Usar la función 'error' de SvelteKit para manejar fallos
        error(response.status, `Error al cargar Pokémon: ${response.statusText}`);
    }

    // --- 5. OBTENCIÓN DE DATOS Y CORRECCIÓN DE NOMBRES ---
    // Asumiendo que tu API devuelve una lista de pokemones.
    let pokemones = await response.json(); 

    // Si tu API devuelve un objeto con metadatos (ej: { count: 100, results: [...] }), 
    // podrías necesitar cambiar la línea anterior por:
    // const data = await response.json();
    // let pokemones = data.results; 
    
    // Determinar si hay más páginas (para la interfaz de usuario)
    const hasMore = pokemones.length === pageSize;

    // --- 6. RETORNO DE DATOS ---
    return {
        pokemones,
        hasMore,
        page // Devolvemos la página actual para los controles de navegación
    };
}
